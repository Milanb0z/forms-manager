const router = require("express").Router();

const { User } = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const auth = require("../middleware/auth");

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

//Get Profile
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await req.user.populate("createdForms");

    let token = generateToken(res, user._id);

    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.patch("/", auth, async (req, res) => {
  try {
    const user = req.user;
    const { username, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(user._id, {
      username,
      email,
    });
    console.log(updatedUser);
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email }).populate("createdForms");
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

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const foundUser = await User.findOne({ username }).populate("createdForms");

    console.log(foundUser);

    if (!foundUser) {
      return res.status(404).send({ error: "User not found" });
    }

    res.send(foundUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

module.exports = router;
