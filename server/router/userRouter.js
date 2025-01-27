const router = require("express").Router();
const jwt = require("jsonwebtoken");

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
    const user = await req.user.populate({
      path: "createdForms",

      populate: {
        path: "invites",
        select: "isSolved",
      },

      populate: {
        path: "responses",
        select: "_id createdAt",
      },
    });

    res.send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.patch("/", auth, async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existUser = await User.findOne({ username });

    if (!existUser) {
      return res.status(404).send({ error: "Username Taken" });
    }

    const fetchUser = await User.findOne({ email });

    if (!fetchUser) {
      return res.status(404).send({ error: "User not Found" });
    }

    const isPassValid = await fetchUser.isValidPassword(password);
    if (!isPassValid) {
      return res.status(401).send({ error: "Password is incorrect" });
    }

    fetchUser.username = username;

    const updatedUser = await fetchUser.save();

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

    generateToken(res, foundUser._id);

    let accessToken = jwt.sign(
      { userId: foundUser._id },
      process.env.JWT_SECRET,
      { expiresIn: 60 }
    );

    res.send({ user: foundUser, token: accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.get("/refresh", async (req, res) => {
  const refreshToken = req.cookies["jwt"];
  if (!refreshToken) {
    return res.status(401).send("Access Denied. No refresh token provided.");
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const token = jwt.sign({ userId: decoded.userId }, process.env.JWT_SECRET, {
      expiresIn: 60,
    });

    const user = await User.findById(decoded.userId).select("-password");

    res.send({ token, user });
  } catch (error) {
    return res.status(400).send("Invalid refresh token.");
  }
});

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const foundUser = await User.findOne({ username })
      .populate("createdForms")
      .select("-password");

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
