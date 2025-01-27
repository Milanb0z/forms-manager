const jwt = require("jsonwebtoken");

const generateToken = (res, userId, daysNum = 30) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: daysNum * 24 * 60 * 60 * 1000, // 30 days
  });

  return token;
};

module.exports = generateToken;
