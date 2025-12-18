// controllers/authController.js
const User = require("../models/User");
const OTP = require("../models/OTP");
const crypto = require("crypto");
const sendTokenResponse = require("../utils/generateToken");
const { sendEmail } = require("../utils/sendEmail");
const { sendOTP } = require("../utils/sendSMS");

// ==================== SEND OTP ====================
exports.sendMobileOTP = async (req, res, next) => {
  try {
    const { countryCode, mobileNumber, purpose = "registration" } = req.body;

    console.log("📱 Send OTP Request:", { countryCode, mobileNumber, purpose });

    // Validate inputs
    if (!countryCode || !mobileNumber) {
      return res.status(400).json({
        success: false,
        message: "Country code and mobile number are required",
      });
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit mobile number",
      });
    }

    // Check if phone already registered
    if (purpose === "registration") {
      const existingUser = await User.findOne({
        "phone.number": mobileNumber,
        "phone.isVerified": true,
      });

      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "This mobile number is already registered",
        });
      }
    }

    // Delete existing OTPs for this number
    await OTP.deleteMany({ "phone.number": mobileNumber, purpose });

    // Generate 6-digit OTP
    const otpValue = Math.floor(100000 + Math.random() * 900000).toString();

    // Hash OTP for storage
    const hashedOTP = crypto.createHash("sha256").update(otpValue).digest("hex");

    // Create OTP record
    const otpRecord = await OTP.create({
      phone: { countryCode, number: mobileNumber },
      otp: hashedOTP,
      purpose,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
    });

    console.log("✅ OTP Created:", otpRecord._id);

    // Send OTP (logs to console in dev)
    await sendOTP(countryCode, mobileNumber, otpValue);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      data: { expiresIn: 600 },
      // Include OTP in development for testing
      ...(process.env.NODE_ENV === "development" && { devOTP: otpValue }),
    });
  } catch (error) {
    console.error("❌ Send OTP Error:", error);
    next(error);
  }
};

// ==================== VERIFY OTP ====================
exports.verifyMobileOTP = async (req, res, next) => {
  try {
    const { countryCode, mobileNumber, otp, purpose = "registration" } = req.body;

    console.log("🔐 Verify OTP Request:", { countryCode, mobileNumber, otp, purpose });

    if (!countryCode || !mobileNumber || !otp) {
      return res.status(400).json({
        success: false,
        message: "Country code, mobile number, and OTP are required",
      });
    }

    // Find OTP record
    const otpRecord = await OTP.findOne({
      "phone.countryCode": countryCode,
      "phone.number": mobileNumber,
      purpose,
      isVerified: false,
    }).sort({ createdAt: -1 });

    console.log("📋 Found OTP Record:", otpRecord ? otpRecord._id : "Not found");

    if (!otpRecord) {
      return res.status(400).json({
        success: false,
        message: "OTP not found. Please request a new OTP.",
      });
    }

    // Check if expired
    if (otpRecord.expiresAt < Date.now()) {
      await OTP.findByIdAndDelete(otpRecord._id);
      return res.status(400).json({
        success: false,
        message: "OTP has expired. Please request a new OTP.",
      });
    }

    // Check attempts
    if (otpRecord.attempts >= 5) {
      await OTP.findByIdAndDelete(otpRecord._id);
      return res.status(400).json({
        success: false,
        message: "Maximum attempts exceeded. Please request a new OTP.",
      });
    }

    // Increment attempts
    otpRecord.attempts += 1;

    // Verify OTP
    const hashedOTP = crypto.createHash("sha256").update(otp).digest("hex");

    if (otpRecord.otp !== hashedOTP) {
      await otpRecord.save();
      return res.status(400).json({
        success: false,
        message: `Invalid OTP. ${5 - otpRecord.attempts} attempts remaining.`,
      });
    }

    // OTP is correct - Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(verificationToken).digest("hex");

    // Update OTP record as verified
    otpRecord.isVerified = true;
    otpRecord.verificationToken = hashedToken;
    otpRecord.verificationTokenExpire = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes
    await otpRecord.save();

    console.log("✅ OTP Verified! Token generated:", verificationToken.substring(0, 10) + "...");
    console.log("📋 OTP Record Updated:", {
      id: otpRecord._id,
      isVerified: otpRecord.isVerified,
      hasToken: !!otpRecord.verificationToken,
      tokenExpire: otpRecord.verificationTokenExpire,
    });

    res.status(200).json({
      success: true,
      message: "Mobile number verified successfully",
      data: {
        verified: true,
        verificationToken, // Send plain token to frontend
        expiresIn: 1800, // 30 minutes
      },
    });
  } catch (error) {
    console.error("❌ Verify OTP Error:", error);
    next(error);
  }
};

// ==================== REGISTER ====================
exports.register = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      password,
      countryCode,
      mobileNumber,
      verificationToken,
      skillLevel,
      interestedIn,
      goal,
      collegeName,
      agreedToTerms,
    } = req.body;

    console.log("📝 Register Request:", {
      fullName,
      email,
      mobileNumber,
      hasVerificationToken: !!verificationToken,
      verificationToken: verificationToken ? verificationToken.substring(0, 10) + "..." : "none",
    });

    // Validate required fields
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and password",
      });
    }

    if (!agreedToTerms) {
      return res.status(400).json({
        success: false,
        message: "You must agree to the Terms of Service",
      });
    }

    // Check if email exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email is already registered",
      });
    }

    // Verify phone if provided
    let phoneVerified = false;

    if (mobileNumber && verificationToken) {
      // Hash the token from frontend
      const hashedToken = crypto.createHash("sha256").update(verificationToken).digest("hex");

      console.log("🔍 Looking for OTP record with:", {
        mobileNumber,
        hashedToken: hashedToken.substring(0, 10) + "...",
      });

      // Find the verified OTP record
      const otpRecord = await OTP.findOne({
        "phone.number": mobileNumber,
        isVerified: true,
        verificationToken: hashedToken,
      });

      console.log("📋 Found OTP Record:", otpRecord ? {
        id: otpRecord._id,
        isVerified: otpRecord.isVerified,
        tokenExpire: otpRecord.verificationTokenExpire,
        isExpired: otpRecord.verificationTokenExpire < new Date(),
      } : "Not found");

      if (!otpRecord) {
        // Let's also check what OTP records exist for debugging
        const allOtpRecords = await OTP.find({ "phone.number": mobileNumber });
        console.log("📋 All OTP records for this number:", allOtpRecords.map(r => ({
          id: r._id,
          isVerified: r.isVerified,
          hasToken: !!r.verificationToken,
        })));

        return res.status(400).json({
          success: false,
          message: "Mobile verification expired or invalid. Please verify again.",
        });
      }

      // Check if verification token expired
      if (otpRecord.verificationTokenExpire < new Date()) {
        await OTP.findByIdAndDelete(otpRecord._id);
        return res.status(400).json({
          success: false,
          message: "Verification expired. Please verify your mobile again.",
        });
      }

      phoneVerified = true;

      // Delete the OTP record after successful use
      await OTP.findByIdAndDelete(otpRecord._id);
      console.log("✅ Phone verified and OTP record deleted");
    } else if (mobileNumber && !verificationToken) {
      console.log("⚠️ Mobile number provided but no verification token");
      return res.status(400).json({
        success: false,
        message: "Please verify your mobile number",
      });
    }

    // Create user
    const user = await User.create({
      name: fullName.trim(),
      email: email.toLowerCase().trim(),
      password,
      phone: mobileNumber
        ? {
            countryCode: countryCode || "+91",
            number: mobileNumber,
            isVerified: phoneVerified,
            verifiedAt: phoneVerified ? new Date() : undefined,
          }
        : undefined,
      skillLevel: skillLevel || "Beginner",
      interestedIn: interestedIn || [],
      goal,
      collegeName: goal === "College" ? collegeName?.trim() : undefined,
      agreedToTerms: true,
      agreedToTermsAt: new Date(),
      authProvider: "local",
    });

    console.log("✅ User created:", user._id);

    // Generate email verification token
    const emailVerificationToken = user.getEmailVerificationToken();
    await user.save({ validateBeforeSave: false });

    // Send welcome email (optional)
    try {
      const verifyUrl = `${process.env.FRONTEND_URL}/verify-email/${emailVerificationToken}`;
      await sendEmail({
        email: user.email,
        subject: "Welcome to HackPro Academy",
        html: `<h1>Welcome ${user.name}!</h1><p>Please verify your email: <a href="${verifyUrl}">Click here</a></p>`,
      });
    } catch (emailError) {
      console.log("⚠️ Welcome email failed:", emailError.message);
    }

    sendTokenResponse(user, 201, res, "Registration successful!");
  } catch (error) {
    console.error("❌ Register Error:", error);
    next(error);
  }
};

// ==================== LOGIN ====================
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    console.log("🔐 Login Request:", { email });

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (user.authProvider !== "local") {
      return res.status(400).json({
        success: false,
        message: `Please login with ${user.authProvider}`,
      });
    }

    // Check if locked
    if (user.lockUntil && user.lockUntil > Date.now()) {
      const lockTimeRemaining = Math.ceil((user.lockUntil - Date.now()) / 1000 / 60);
      return res.status(423).json({
        success: false,
        message: `Account locked. Try again in ${lockTimeRemaining} minutes.`,
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      user.loginAttempts = (user.loginAttempts || 0) + 1;

      if (user.loginAttempts >= 5) {
        user.lockUntil = Date.now() + 30 * 60 * 1000;
        user.loginAttempts = 0;
      }

      await user.save({ validateBeforeSave: false });

      const remainingAttempts = 5 - user.loginAttempts;
      return res.status(401).json({
        success: false,
        message: `Invalid credentials.${remainingAttempts > 0 ? ` ${remainingAttempts} attempts remaining.` : ""}`,
        remainingAttempts: remainingAttempts > 0 ? remainingAttempts : 0,
      });
    }

    // Reset on success
    user.loginAttempts = 0;
    user.lockUntil = undefined;
    user.lastLogin = Date.now();
    await user.save({ validateBeforeSave: false });

    console.log("✅ Login successful:", user._id);

    sendTokenResponse(user, 200, res, "Login successful");
  } catch (error) {
    console.error("❌ Login Error:", error);
    next(error);
  }
};

// ==================== LOGOUT ====================
exports.logout = async (req, res, next) => {
  try {
    res.cookie("token", "none", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};

// ==================== GET ME ====================
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// ==================== VERIFY EMAIL ====================
exports.verifyEmail = async (req, res, next) => {
  try {
    const emailVerificationToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      emailVerificationToken,
      emailVerificationExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification token",
      });
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpire = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    next(error);
  }
};

// ==================== FORGOT PASSWORD ====================
exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email?.toLowerCase() });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No user found with that email",
      });
    }

    if (user.authProvider !== "local") {
      return res.status(400).json({
        success: false,
        message: `This account uses ${user.authProvider} login.`,
      });
    }

    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    try {
      await sendEmail({
        email: user.email,
        subject: "Password Reset Request",
        html: `<h1>Reset Password</h1><p>Click <a href="${resetUrl}">here</a> to reset. Expires in 15 minutes.</p>`,
      });

      res.status(200).json({
        success: true,
        message: "Password reset email sent",
      });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });

      return res.status(500).json({
        success: false,
        message: "Email could not be sent",
      });
    }
  } catch (error) {
    next(error);
  }
};

// ==================== RESET PASSWORD ====================
exports.resetPassword = async (req, res, next) => {
  try {
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired reset token",
      });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    user.loginAttempts = 0;
    user.lockUntil = undefined;
    await user.save();

    sendTokenResponse(user, 200, res, "Password reset successful");
  } catch (error) {
    next(error);
  }
};

// ==================== UPDATE PASSWORD ====================
exports.updatePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id).select("+password");

    if (!(await user.matchPassword(currentPassword))) {
      return res.status(401).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    user.password = newPassword;
    await user.save();

    sendTokenResponse(user, 200, res, "Password updated successfully");
  } catch (error) {
    next(error);
  }
};

// ==================== GOOGLE AUTH ====================
exports.googleAuth = async (req, res, next) => {
  try {
    const { profile } = req.body;

    if (!profile || !profile.email) {
      return res.status(400).json({
        success: false,
        message: "Invalid Google profile data",
      });
    }

    const { email, name, picture, sub: googleId } = profile;

    let user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      user.lastLogin = Date.now();
      await user.save({ validateBeforeSave: false });
    } else {
      user = await User.create({
        name,
        email: email.toLowerCase(),
        password: crypto.randomBytes(32).toString("hex"),
        avatar: { url: picture },
        authProvider: "google",
        providerId: googleId,
        isEmailVerified: true,
        agreedToTerms: true,
        agreedToTermsAt: new Date(),
      });
    }

    sendTokenResponse(user, 200, res, "Google authentication successful");
  } catch (error) {
    next(error);
  }
};

// ==================== GITHUB AUTH ====================
exports.githubAuth = async (req, res, next) => {
  try {
    res.status(200).json({
      success: false,
      message: "GitHub OAuth not implemented yet",
    });
  } catch (error) {
    next(error);
  }
};