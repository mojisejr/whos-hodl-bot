const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    discordGuildId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Message;
