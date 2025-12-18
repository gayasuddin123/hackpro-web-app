const Certificate = require("../models/Certificate");
const Course = require("../models/Course");
const User = require("../models/User");

// @desc    Generate certificate
// @route   POST /api/v1/certificates/generate
// @access  Private
exports.generateCertificate = async (req, res, next) => {
  try {
    const { courseId } = req.body;

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    // Check if user has purchased and completed the course
    const purchasedCourse = req.user.purchasedCourses.find(
      (pc) => pc.course.toString() === courseId
    );

    if (!purchasedCourse) {
      return res.status(403).json({
        success: false,
        message: "You have not purchased this course",
      });
    }

    if (purchasedCourse.progress < 100) {
      return res.status(400).json({
        success: false,
        message: "Please complete the course to get certificate",
      });
    }

    // Check if certificate already exists
    const existingCertificate = await Certificate.findOne({
      user: req.user._id,
      course: courseId,
    });

    if (existingCertificate) {
      return res.status(200).json({
        success: true,
        message: "Certificate already exists",
        data: existingCertificate,
      });
    }

    // Create certificate
    const certificate = await Certificate.create({
      user: req.user._id,
      course: courseId,
      completionDate: Date.now(),
    });

    await certificate.populate([
      { path: "user", select: "name email" },
      { path: "course", select: "title instructor" },
    ]);

    res.status(201).json({
      success: true,
      message: "Certificate generated successfully",
      data: certificate,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Verify certificate
// @route   GET /api/v1/certificates/verify/:verificationCode
// @access  Public
exports.verifyCertificate = async (req, res, next) => {
  try {
    const certificate = await Certificate.findOne({
      verificationCode: req.params.verificationCode,
    })
      .populate("user", "name")
      .populate("course", "title");

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found or invalid",
      });
    }

    if (!certificate.isValid) {
      return res.status(400).json({
        success: false,
        message: "This certificate has been revoked",
      });
    }

    res.status(200).json({
      success: true,
      data: {
        certificateId: certificate.certificateId,
        userName: certificate.user.name,
        courseName: certificate.course.title,
        issuedAt: certificate.issuedAt,
        isValid: certificate.isValid,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user certificates
// @route   GET /api/v1/certificates/my-certificates
// @access  Private
exports.getMyCertificates = async (req, res, next) => {
  try {
    const certificates = await Certificate.find({ user: req.user._id })
      .populate("course", "title thumbnail slug")
      .sort("-createdAt");

    res.status(200).json({
      success: true,
      count: certificates.length,
      data: certificates,
    });
  } catch (error) {
    next(error);
  }
};