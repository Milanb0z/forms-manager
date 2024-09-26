const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");

const auth = async (req, res, next) => {
  let token;

  token = req.headers["token"];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401).send({ error: "Not authorized, token failed" });
    }
  } else {
    res.status(401).send({ error: "Not authorized, no token" });
  }
};

module.exports = auth;
