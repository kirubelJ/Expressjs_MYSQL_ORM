const express = require("express");
const app = express();
var cors = require("cors");
const port = 1000;
const router = require("./routes/users");
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

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api", router);
//

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Express js MYSQL ORM Sample app listening on port ${port}`);
});
