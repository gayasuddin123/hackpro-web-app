const { body } = require("express-validator");

exports.registerValidator = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters"),
    
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),
    
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage(
      "Password must contain uppercase, lowercase, number and special character"
    ),
    
  body("mobileNumber")
    .optional()
    .matches(/^[0-9]{10}$/)
    .withMessage("Please provide a valid 10-digit mobile number"),

  body("countryCode")
    .optional()
    .matches(/^\+[0-9]{1,4}$/)
    .withMessage("Please provide a valid country code"),

  body("skillLevel")
    .optional()
    .isIn(["Beginner", "Intermediate", "Advanced"])
    .withMessage("Invalid skill level"),

  body("interestedIn")
    .optional()
    .isArray()
    .withMessage("Interests must be an array"),

  body("interestedIn.*")
    .optional()
    .isIn(["Cybersecurity", "AI", "Python", "Web Development", "Cloud", "DevOps", "Data Science", "Blockchain"])
    .withMessage("Invalid interest value"),

  body("goal")
    .optional()
    .isIn(["Job", "Skill Upgrade", "College", "Career Change", "Freelancing", "Other"])
    .withMessage("Invalid goal"),

  body("collegeName")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("College name cannot exceed 200 characters"),

  body("agreedToTerms")
    .notEmpty()
    .withMessage("You must agree to the terms")
    .isBoolean()
    .withMessage("Terms agreement must be a boolean")
    .equals("true")
    .withMessage("You must agree to the Terms of Service"),
];

exports.loginValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email"),
    
  body("password")
    .notEmpty()
    .withMessage("Password is required"),
];

exports.forgotPasswordValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email"),
];

exports.resetPasswordValidator = [
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage(
      "Password must contain uppercase, lowercase, number and special character"
    ),
];

exports.sendOTPValidator = [
  body("countryCode")
    .notEmpty()
    .withMessage("Country code is required")
    .matches(/^\+[0-9]{1,4}$/)
    .withMessage("Please provide a valid country code"),

  body("mobileNumber")
    .notEmpty()
    .withMessage("Mobile number is required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Please provide a valid 10-digit mobile number"),

  body("purpose")
    .optional()
    .isIn(["registration", "login", "password-reset", "phone-update"])
    .withMessage("Invalid OTP purpose"),
];

exports.verifyOTPValidator = [
  body("countryCode")
    .notEmpty()
    .withMessage("Country code is required"),

  body("mobileNumber")
    .notEmpty()
    .withMessage("Mobile number is required"),

  body("otp")
    .notEmpty()
    .withMessage("OTP is required")
    .matches(/^[0-9]{6}$/)
    .withMessage("Please provide a valid 6-digit OTP"),
];