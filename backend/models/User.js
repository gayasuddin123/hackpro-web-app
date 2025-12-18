const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    // Basic Info
    name: {
      type: String,
      required: [true, "Please provide your name"],
      trim: true,
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
    },

    // Phone with OTP Verification
    phone: {
      countryCode: {
        type: String,
        default: "+91",
      },
      number: {
        type: String,
        match: [/^[0-9]{10}$/, "Please provide valid 10 digit phone number"],
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
      verifiedAt: Date,
    },

    // Profile Info
    avatar: {
      public_id: String,
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/demo/image/upload/v1/default-avatar.png",
      },
    },
    bio: {
      type: String,
      maxlength: [500, "Bio cannot exceed 500 characters"],
    },

    // Learning Profile
    skillLevel: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    interestedIn: {
      type: [String],
      enum: [
        "Cybersecurity",
        "AI",
        "Python",
        "Web Development",
        "Cloud",
        "DevOps",
        "Data Science",
        "Blockchain",
      ],
      default: [],
    },
    goal: {
      type: String,
      enum: [
        "Job",
        "Skill Upgrade",
        "College",
        "Career Change",
        "Freelancing",
        "Other",
      ],
    },
    collegeName: {
      type: String,
      trim: true,
      maxlength: [200, "College name cannot exceed 200 characters"],
    },

    // Account Status
    role: {
      type: String,
      enum: ["user", "instructor", "admin"],
      default: "user",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    agreedToTerms: {
      type: Boolean,
      default: false,
    },
    agreedToTermsAt: Date,

    // OAuth Providers
    authProvider: {
      type: String,
      enum: ["local", "google", "github"],
      default: "local",
    },
    providerId: String, // OAuth provider ID

    // Course Related
    purchasedCourses: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
        purchasedAt: {
          type: Date,
          default: Date.now,
        },
        progress: {
          type: Number,
          default: 0,
        },
        completedLectures: [String],
        lastAccessedAt: Date,
      },
    ],
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],

    // Security
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    emailVerificationToken: String,
    emailVerificationExpire: Date,
    lastLogin: Date,
    loginAttempts: {
      type: Number,
      default: 0,
    },
    lockUntil: Date,

    // Activity Tracking
    lastActive: Date,
    loginHistory: [
      {
        timestamp: Date,
        ip: String,
        userAgent: String,
        location: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Encrypt password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign(
    {
      id: this._id,
      role: this.role,
      email: this.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

// Match password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate password reset token
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 minutes

  return resetToken;
};

// Generate email verification token
userSchema.methods.getEmailVerificationToken = function () {
  const verificationToken = crypto.randomBytes(32).toString("hex");

  this.emailVerificationToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");

  this.emailVerificationExpire = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

  return verificationToken;
};

// Check if account is locked
userSchema.methods.isLocked = function () {
  return this.lockUntil && this.lockUntil > Date.now();
};

// Index for efficient queries
userSchema.index({ email: 1 });
userSchema.index({ "phone.number": 1 });
userSchema.index({ createdAt: -1 });

module.exports = mongoose.model("User", userSchema);
