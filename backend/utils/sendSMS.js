// utils/sendSMS.js
const sendOTP = async (countryCode, phoneNumber, otp) => {
  // Always log OTP in console (for development)
  console.log("\n" + "=".repeat(50));
  console.log("📱 SMS OTP");
  console.log("=".repeat(50));
  console.log(`Phone: ${countryCode}${phoneNumber}`);
  console.log(`OTP: ${otp}`);
  console.log(`Valid for: 10 minutes`);
  console.log("=".repeat(50) + "\n");

  return { success: true, messageId: "dev-" + Date.now() };
};

module.exports = { sendOTP };