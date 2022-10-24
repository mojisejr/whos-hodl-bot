require("dotenv").config();
const basePath = process.cwd();
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: `${basePath}/src/database/db-files/db.sqlite`,
});

module.exports = sequelize;
