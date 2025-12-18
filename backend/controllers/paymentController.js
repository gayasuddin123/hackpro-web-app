const Razorpay = require("razorpay");
const crypto = require("crypto");
const Order = require("../models/Order");
const Payment = require("../models/Payment");
const User = require("../models/User");
const Course = require("../models/Course");
const { sendEmail, emailTemplates } = require("../utils/sendEmail");

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// @desc    Create Razorpay order
// @route   POST /api/v1/payments/create-order
// @access  Private
exports.createOrder = async (req, res, next) => {
  try {
    const { courseIds, couponCode } = req.body;

    // Validate courses
    const courses = await Course.find({ _id: { $in: courseIds } });

    if (courses.length !== courseIds.length) {
      return res.status(400).json({
        success: false,
        message: "One or more courses not found",
      });
    }

    // Check if user already purchased any course
    const alreadyPurchased = courses.filter((course) =>
      req.user.purchasedCourses.some(
        (pc) => pc.course.toString() === course._id.toString()
      )
    );

    if (alreadyPurchased.length > 0) {
      return res.status(400).json({
        success: false,
        message: `You already own: ${alreadyPurchased.map((c) => c.title).join(", ")}`,
      });
    }

    // Calculate total amount
    let totalAmount = courses.reduce((sum, course) => {
      return sum + (course.discountPrice || course.price);
    }, 0);

    let discount = 0;

    // Apply coupon if provided (you can implement coupon logic here)
    // if (couponCode) { ... }

    const finalAmount = totalAmount - discount;

    // Create order in database
    const order = await Order.create({
      user: req.user._id,
      courses: courses.map((course) => ({
        course: course._id,
        price: course.discountPrice || course.price,
        title: course.title,
      })),
      totalAmount: finalAmount,
      discount,
      couponCode,
    });

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: finalAmount * 100, // Razorpay expects amount in paise
      currency: "INR",
      receipt: order._id.toString(),
      notes: {
        userId: req.user._id.toString(),
        orderId: order._id.toString(),
      },
    });

    // Save payment record
    await Payment.create({
      user: req.user._id,
      order: order._id,
      razorpayOrderId: razorpayOrder.id,
      amount: finalAmount,
      status: "created",
    });

    // Update order with Razorpay order ID
    order.paymentInfo.razorpayOrderId = razorpayOrder.id;
    await order.save();

    res.status(200).json({
      success: true,
      data: {
        orderId: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        dbOrderId: order._id,
      },
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Verify payment
// @route   POST /api/v1/payments/verify
// @access  Private
exports.verifyPayment = async (req, res, next) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderId,
    } = req.body;

    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      // Update payment status to failed
      await Payment.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id },
        { status: "failed" }
      );

      await Order.findByIdAndUpdate(orderId, { paymentStatus: "failed" });

      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    // Payment verified successfully
    // Update Payment
    const payment = await Payment.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: "captured",
      },
      { new: true }
    );

    // Update Order
    const order = await Order.findByIdAndUpdate(
      orderId,
      {
        paymentStatus: "completed",
        paidAt: Date.now(),
        "paymentInfo.razorpayPaymentId": razorpay_payment_id,
        "paymentInfo.razorpaySignature": razorpay_signature,
      },
      { new: true }
    ).populate("courses.course");

    // Add courses to user's purchased courses
    const user = await User.findById(req.user._id);

    order.courses.forEach((item) => {
      user.purchasedCourses.push({
        course: item.course._id,
        purchasedAt: Date.now(),
      });
    });

    await user.save();

    // Update enrolled students count
    await Promise.all(
      order.courses.map((item) =>
        Course.findByIdAndUpdate(item.course._id, {
          $inc: { enrolledStudents: 1 },
        })
      )
    );

    // Send confirmation email
    try {
      await sendEmail({
        email: req.user.email,
        subject: "Purchase Confirmation",
        html: emailTemplates.purchaseConfirmation(
          req.user.name,
          order.courses,
          order.totalAmount
        ),
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      data: {
        order,
        payment,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get payment history
// @route   GET /api/v1/payments/history
// @access  Private
exports.getPaymentHistory = async (req, res, next) => {
  try {
    const payments = await Payment.find({ user: req.user._id })
      .populate({
        path: "order",
        populate: {
          path: "courses.course",
          select: "title slug thumbnail",
        },
      })
      .sort("-createdAt");

    res.status(200).json({
      success: true,
      count: payments.length,
      data: payments,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get Razorpay key
// @route   GET /api/v1/payments/get-key
// @access  Private
exports.getRazorpayKey = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Handle Razorpay webhook
// @route   POST /api/v1/payments/webhook
// @access  Public (Razorpay sends requests)
exports.handleWebhook = async (req, res, next) => {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const signature = req.headers["x-razorpay-signature"];

    const shasum = crypto.createHmac("sha256", webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if (signature !== digest) {
      return res.status(400).json({
        success: false,
        message: "Invalid webhook signature",
      });
    }

    const event = req.body.event;
    const payload = req.body.payload;

    switch (event) {
      case "payment.captured":
        // Handle successful payment
        console.log("Payment captured:", payload.payment.entity.id);
        break;
      case "payment.failed":
        // Handle failed payment
        console.log("Payment failed:", payload.payment.entity.id);
        break;
      case "refund.created":
        // Handle refund
        console.log("Refund created:", payload.refund.entity.id);
        break;
    }

    res.status(200).json({ received: true });
  } catch (error) {
    next(error);
  }
};