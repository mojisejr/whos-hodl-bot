const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Plan extends Model {}

Plan.init(
  {
    planId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    planName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //@NON : Pricing in USDT ?
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    period: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize }
);

module.exports = Plan;
