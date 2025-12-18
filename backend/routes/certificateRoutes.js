const express = require("express");
const router = express.Router();
const {
  generateCertificate,
  verifyCertificate,
  getMyCertificates,
} = require("../controllers/certificateController");
const { protect } = require("../middleware/auth");

router.post("/generate", protect, generateCertificate);
router.get("/verify/:verificationCode", verifyCertificate);
router.get("/my-certificates", protect, getMyCertificates);

module.exports = router;