// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  getProfile,
  updateProfile,
  updateAvatar,
  deleteAvatar,
  getDashboard,
  getMyCourses,
  getMyCertificates,
  updateCourseProgress,
} = require("../controllers/userController");
const { protect } = require("../middleware/auth");
const upload = require("../middleware/upload");

// All routes require authentication
router.use(protect);

// Profile routes
router.get("/profile", getProfile);
router.put("/profile", updateProfile);
router.put("/avatar", upload.single("avatar"), updateAvatar);
router.delete("/avatar", deleteAvatar);

// Dashboard
router.get("/dashboard", getDashboard);

// Courses
router.get("/my-courses", getMyCourses);
router.put("/courses/:courseId/progress", updateCourseProgress);

// Certificates
router.get("/my-certificates", getMyCertificates);

module.exports = router;