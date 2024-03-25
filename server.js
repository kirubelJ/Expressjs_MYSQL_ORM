const express = require("express");
const app = express();
const port = 1000;
const router = require("./routes/users")
const sequelize = require("./db/dbconfig");


//models
const { User } = require("./db/model");
//

const TestDBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

TestDBConnection();

//
app.use(express.json());
app.use("/api",router)
//

app.get("/", async (req, res) => {
  res.send("Hello World!");

  //res.send(newUser);
  //   await newUser.save();
});

// app.post("/user", async (req, res) => {
//   try {
//     const newUser = await User.create({
//       firstName: "kirubel",
//       lastName: "jalleta",
//     });
//     await newUser.save();
//     res.send(newUser);
//   } catch (err) {
//     res.send(err);
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
