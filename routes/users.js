const express = require("express");
router = express.Router();
//models
const { User } = require("../db/model");
//

// Create a new user
router.post("/user", async (req, res) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstname,
      lastName: req.body.lastname,
    });
    res.status(200).json({ msg: "User Created Succsfuly", data: newUser });
  } catch (err) {
    res.status(500).json({ message: "Failed to create user.", error: err });
  }
});

module.exports = router;
