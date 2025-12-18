const mongoose = require("mongoose");
const crypto = require("crypto");

const certificateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    certificateId: {
      type: String,
      unique: true,
    },
    verificationCode: {
      type: String,
      unique: true,
    },
    issuedAt: {
      type: Date,
      default: Date.now,
    },
    completionDate: {
      type: Date,
      default: Date.now,
    },
    grade: String,
    score: Number,
    certificateUrl: String,
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Generate unique certificate ID and verification code
certificateSchema.pre("save", function (next) {
  if (!this.certificateId) {
    this.certificateId = `CERT-${Date.now()}-${crypto
      .randomBytes(4)
      .toString("hex")
      .toUpperCase()}`;
  }
  if (!this.verificationCode) {
    this.verificationCode = crypto.randomBytes(16).toString("hex");
  }
  next();
});

module.exports = mongoose.model("Certificate", certificateSchema);