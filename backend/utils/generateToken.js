// utils/generateToken.js
const sendTokenResponse = (user, statusCode, res, message = "Success") => {
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  };

  // Create user object without password
  const userData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
    isEmailVerified: user.isEmailVerified,
    phone: user.phone,
    skillLevel: user.skillLevel,
    interestedIn: user.interestedIn,
    goal: user.goal,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message,
    token,
    user: userData,
  });
};

module.exports = sendTokenResponse;