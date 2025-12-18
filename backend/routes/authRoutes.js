// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { protect } = require("../middleware/auth");

// OTP Routes
router.post("/send-otp", authController.sendMobileOTP);
router.post("/verify-otp", authController.verifyMobileOTP);
router.post("/resend-otp", authController.sendMobileOTP);

// Auth Routes
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", protect, authController.logout);
router.get("/me", protect, authController.getMe);

// Email Verification
router.get("/verify-email/:token", authController.verifyEmail);

// Password Routes
router.post("/forgot-password", authController.forgotPassword);
router.put("/reset-password/:token", authController.resetPassword);
router.put("/update-password", protect, authController.updatePassword);

// OAuth Routes
router.post("/google", authController.googleAuth);
router.post("/github", authController.githubAuth);

module.exports = router;