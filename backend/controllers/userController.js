// controllers/userController.js
const User = require("../models/User");
const Course = require("../models/Course");
const Certificate = require("../models/Certificate");
const cloudinary = require("../config/cloudinary");

// ==================== GET USER PROFILE ====================
// @route   GET /api/v1/users/profile
// @access  Private
exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
      .select("-password")
      .populate("purchasedCourses.course", "title slug thumbnail price");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Get Profile Error:", error);
    next(error);
  }
};

// ==================== UPDATE USER PROFILE ====================
// @route   PUT /api/v1/users/profile
// @access  Private
exports.updateProfile = async (req, res, next) => {
  try {
    const { name, phone, skillLevel, interestedIn, goal, collegeName, bio } = req.body;

    const updateData = {};
    
    if (name) updateData.name = name.trim();
    if (phone) {
      updateData.phone = {
        ...req.user.phone,
        number: phone,
      };
    }
    if (skillLevel) updateData.skillLevel = skillLevel;
    if (interestedIn) updateData.interestedIn = interestedIn;
    if (goal) updateData.goal = goal;
    if (collegeName !== undefined) updateData.collegeName = collegeName;
    if (bio !== undefined) updateData.bio = bio;

    const user = await User.findByIdAndUpdate(req.user.id, updateData, {
      new: true,
      runValidators: true,
    }).select("-password");

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: user,
    });
  } catch (error) {
    console.error("Update Profile Error:", error);
    next(error);
  }
};

// ==================== UPDATE PROFILE AVATAR ====================
// @route   PUT /api/v1/users/avatar
// @access  Private
exports.updateAvatar = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image",
      });
    }

    const user = await User.findById(req.user.id);

    // Delete old avatar from Cloudinary if exists
    if (user.avatar && user.avatar.public_id) {
      try {
        await cloudinary.uploader.destroy(user.avatar.public_id);
      } catch (deleteError) {
        console.log("Error deleting old avatar:", deleteError.message);
      }
    }

    // Upload new avatar to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "hackpro-academy/avatars",
          width: 300,
          height: 300,
          crop: "fill",
          gravity: "face",
          format: "jpg",
          quality: "auto",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(req.file.buffer);
    });

    // Update user avatar
    user.avatar = {
      public_id: result.public_id,
      url: result.secure_url,
    };
    await user.save();

    res.status(200).json({
      success: true,
      message: "Avatar updated successfully",
      data: {
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error("Update Avatar Error:", error);
    next(error);
  }
};

// ==================== DELETE PROFILE AVATAR ====================
// @route   DELETE /api/v1/users/avatar
// @access  Private
exports.deleteAvatar = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    // Delete from Cloudinary if exists
    if (user.avatar && user.avatar.public_id) {
      await cloudinary.uploader.destroy(user.avatar.public_id);
    }

    // Reset to default avatar
    user.avatar = {
      public_id: null,
      url: null,
    };
    await user.save();

    res.status(200).json({
      success: true,
      message: "Avatar removed successfully",
    });
  } catch (error) {
    console.error("Delete Avatar Error:", error);
    next(error);
  }
};

// ==================== GET USER DASHBOARD STATS ====================
// @route   GET /api/v1/users/dashboard
// @access  Private
exports.getDashboard = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).populate({
      path: "purchasedCourses.course",
      select: "title slug thumbnail totalLectures totalDuration instructor category",
      populate: {
        path: "instructor",
        select: "name avatar",
      },
    });

    // Calculate stats
    const totalCourses = user.purchasedCourses?.length || 0;
    
    // Calculate overall progress
    let totalProgress = 0;
    let completedCourses = 0;
    let inProgressCourses = 0;

    user.purchasedCourses?.forEach((item) => {
      const progress = item.progress || 0;
      totalProgress += progress;
      if (progress === 100) {
        completedCourses++;
      } else if (progress > 0) {
        inProgressCourses++;
      }
    });

    const averageProgress = totalCourses > 0 ? Math.round(totalProgress / totalCourses) : 0;

    // Get certificates count
    const certificatesCount = await Certificate.countDocuments({ user: req.user.id });

    // Get recent activity (last 5 courses accessed)
    const recentCourses = user.purchasedCourses
      ?.filter((item) => item.course)
      .sort((a, b) => new Date(b.lastAccessedAt || b.purchasedAt) - new Date(a.lastAccessedAt || a.purchasedAt))
      .slice(0, 5);

    // Get continue learning (courses in progress)
    const continueLearning = user.purchasedCourses
      ?.filter((item) => item.course && item.progress > 0 && item.progress < 100)
      .sort((a, b) => new Date(b.lastAccessedAt || b.purchasedAt) - new Date(a.lastAccessedAt || a.purchasedAt))
      .slice(0, 3);

    res.status(200).json({
      success: true,
      data: {
        user: {
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          skillLevel: user.skillLevel,
          memberSince: user.createdAt,
        },
        stats: {
          totalCourses,
          completedCourses,
          inProgressCourses,
          certificatesCount,
          averageProgress,
        },
        recentCourses,
        continueLearning,
      },
    });
  } catch (error) {
    console.error("Get Dashboard Error:", error);
    next(error);
  }
};

// ==================== GET USER'S PURCHASED COURSES ====================
// @route   GET /api/v1/users/my-courses
// @access  Private
exports.getMyCourses = async (req, res, next) => {
  try {
    const { status, sort = "-purchasedAt" } = req.query;

    const user = await User.findById(req.user.id).populate({
      path: "purchasedCourses.course",
      select: "title slug thumbnail totalLectures totalDuration instructor category level ratings",
      populate: {
        path: "instructor",
        select: "name avatar",
      },
    });

    let courses = user.purchasedCourses?.filter((item) => item.course) || [];

    // Filter by status
    if (status === "completed") {
      courses = courses.filter((item) => item.progress === 100);
    } else if (status === "in-progress") {
      courses = courses.filter((item) => item.progress > 0 && item.progress < 100);
    } else if (status === "not-started") {
      courses = courses.filter((item) => !item.progress || item.progress === 0);
    }

    // Sort
    if (sort === "-purchasedAt") {
      courses.sort((a, b) => new Date(b.purchasedAt) - new Date(a.purchasedAt));
    } else if (sort === "purchasedAt") {
      courses.sort((a, b) => new Date(a.purchasedAt) - new Date(b.purchasedAt));
    } else if (sort === "-progress") {
      courses.sort((a, b) => (b.progress || 0) - (a.progress || 0));
    } else if (sort === "progress") {
      courses.sort((a, b) => (a.progress || 0) - (b.progress || 0));
    }

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    console.error("Get My Courses Error:", error);
    next(error);
  }
};

// ==================== GET USER'S CERTIFICATES ====================
// @route   GET /api/v1/users/my-certificates
// @access  Private
exports.getMyCertificates = async (req, res, next) => {
  try {
    const certificates = await Certificate.find({ user: req.user.id })
      .populate("course", "title slug thumbnail category")
      .sort("-issuedAt");

    res.status(200).json({
      success: true,
      count: certificates.length,
      data: certificates,
    });
  } catch (error) {
    console.error("Get My Certificates Error:", error);
    next(error);
  }
};

// ==================== UPDATE COURSE PROGRESS ====================
// @route   PUT /api/v1/users/courses/:courseId/progress
// @access  Private
exports.updateCourseProgress = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const { progress, completedLectures } = req.body;

    const user = await User.findById(req.user.id);

    const courseIndex = user.purchasedCourses.findIndex(
      (item) => item.course.toString() === courseId
    );

    if (courseIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Course not found in your purchased courses",
      });
    }

    // Update progress
    if (progress !== undefined) {
      user.purchasedCourses[courseIndex].progress = Math.min(100, Math.max(0, progress));
    }
    if (completedLectures) {
      user.purchasedCourses[courseIndex].completedLectures = completedLectures;
    }
    user.purchasedCourses[courseIndex].lastAccessedAt = new Date();

    await user.save();

    res.status(200).json({
      success: true,
      message: "Progress updated",
      data: user.purchasedCourses[courseIndex],
    });
  } catch (error) {
    console.error("Update Progress Error:", error);
    next(error);
  }
};