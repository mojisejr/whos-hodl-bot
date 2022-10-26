const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Role extends Model {}

Role.init(
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
    role: {
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

module.exports = Role;
