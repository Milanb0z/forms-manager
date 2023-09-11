const router = require("express").Router();

const { User } = require("../models/userModel");
const generateToken = require("../utils/generateToken");

//Create User
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(402).send({ error: "Username / Email Already Exists" });
    }

    const newUser = new User({ username, email, password });

    const savedUser = await newUser.save();

    let token = generateToken(res, savedUser._id);

    res.send({ user: savedUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(404).send({ error: "User not Found" });
    }

    const isPassValid = await foundUser.isValidPassword(password);
    if (!isPassValid) {
      return res.status(401).send({ error: "Password is incorrect" });
    }

    let token = generateToken(res, foundUser._id);

    res.send({ user: foundUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

module.exports = router;
