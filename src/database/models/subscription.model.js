const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Subscription extends Model {}

Subscription.init(
  {
    discordGuildId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    ownerDiscordId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerWalletAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    planId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    start: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    end: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    expired: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Subscription;
