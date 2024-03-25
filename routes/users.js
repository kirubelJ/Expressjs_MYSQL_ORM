const express = require("express");
router = express.Router();
//models
const { User } = require("../db/model");
//

// Create a new user
router.post("/user", async (req, res) => {
  try {
    const newUser = await User.create({
      firstName: "kirubel",
      lastName: "jalleta",
    });
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Failed to create user.", error: err });
  }
});

module.exports = router;
