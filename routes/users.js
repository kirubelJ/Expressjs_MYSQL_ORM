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

// Find all user , SELECT * FROM Table Name
router.get("/users", async (req, res) => {
  try {
    const Users = await User.findAll();
    res.status(200).json({ msg: "All users", data: Users }); //json array format
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to to get all users.", error: err });
  }
});

// Find all user by attribute, like col name in this case id and first name
router.get("/users/attribute", async (req, res) => {
  try {
    const Users = await User.findAll({
      attributes: ["id", "firstName"],
    });
    res.status(200).json({ msg: "All users", data: Users }); //json array format
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to to get all users.", error: err });
  }
});

// Update user last name by id
router.put("/users/:id", async (req, res) => {
  try {
    const UpdatedUser = await User.update(
      { lastName: req.body.updatedLastName },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "User data updated", data: UpdatedUser }); //json array format
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to to get all users.", error: err });
  }
});

// Delete user by id
router.delete("/users/:id", async (req, res) => {
  try {
    const UpdatedUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User data deleted", data: UpdatedUser }); //json array format
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to to get all users.", error: err });
  }
});

module.exports = router;
