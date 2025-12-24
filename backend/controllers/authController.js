// controllers/authController.js
const User = require("../models/User");
const crypto = require("crypto");
const sendTokenResponse = require("../utils/generateToken");
const { sendEmail } = require("../utils/sendEmail");

// ==================== REGISTER ====================
exports.register = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      password,
      countryCode,
      mobileNumber,
      skillLevel,
      interestedIn,
      goal,
      collegeName,
      agreedToTerms,
    } = req.body;

    console.log("📝 Register Request:", {
      fullName,
      email,
      mobileNumber
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

    // Create user
    const user = await User.create({
      name: fullName.trim(),
      email: email.toLowerCase().trim(),
      password,
      phone: mobileNumber
        ? {
            countryCode: countryCode || "+91",
            number: mobileNumber,
            isVerified: true,
            verifiedAt: new Date(),
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

    // // Send welcome email (optional)
    // try {
    //   const verifyUrl = `${process.env.FRONTEND_URL}/verify-email/${emailVerificationToken}`;
    //   await sendEmail({
    //     email: user.email,
    //     subject: "Welcome to HackPro Academy",
    //     html: `<h1>Welcome ${user.name}!</h1><p>Please verify your email: <a href="${verifyUrl}">Click here</a></p>`,
    //   });
    // } catch (emailError) {
    //   console.log("⚠️ Welcome email failed:", emailError.message);
    // }

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

    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );

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
      const lockTimeRemaining = Math.ceil(
        (user.lockUntil - Date.now()) / 1000 / 60
      );
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
        message: `Invalid credentials.${
          remainingAttempts > 0
            ? ` ${remainingAttempts} attempts remaining.`
            : ""
        }`,
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
