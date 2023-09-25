import express from "express";
const router = express.Router();
import UserModel from "../models/users.js";
import bcrypt from "bcrypt";
import passport from "passport";
import loginmiddleware from "../middleware/auth.js";

// session check

router.get("/isLogged", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({
      success: true,
      user: req.user.username,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "user not logged",
    });
  }
});

// login passport
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err: any, user: any, info: any) => {
    if (err) throw err;

    if (!user) {
      res.status(400).json({
        message: "User Not found",
      });
    } else {
      req.login(user, (err) => {
        if (err) throw err;
        res.status(200).json({
          message: "Login success",
        });
        console.log(user);
      });
    }
  })(req, res, next); // Include (req, res) to execute the middleware
});

/// register ///

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  //check if username & password empty
  if (!username || !password) {
    return res.status(400).json({
      message: "Username & password are requrired",
    });
  }

  try {
    // Check if the username already exists
    const existingUser = await UserModel.findOne({ username: username });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists. Please login.",
      });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await UserModel.create({
      username: username,
      password: hashedPassword, // Use the hashed password
      type: 1,
    });

    // Send a success response
    res.status(200).json({
      message: "Registration completed.",
      data: user,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Internal server error." });
  }
});

// profile

router.get("/profile", loginmiddleware, (req, res) => {
  res.send("working");
});

export default router;
