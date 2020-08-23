var Sequelize = require("sequelize");

var connection = require("../config/connection.js");


var Character = sequelize.define("character", {

  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  role: Sequelize.STRING,
  age: Sequelize.INTEGER,
  forcePoints: Sequelize.INTEGER
}, {
  timestamps: false
});

Character.sync();

module.exports = Character;