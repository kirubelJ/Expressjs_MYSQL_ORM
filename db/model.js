const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");
//const sequelize = new Sequelize("mysql::memory:");

const User = sequelize.define(
  "User",//the data base table name must also be "User"
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    // freezeTableName: true,
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = { User };
