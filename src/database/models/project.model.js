const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Project extends Model {}

Project.init(
  {
    nftAddress: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    ownerDiscordId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discordGuildId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerWalletAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalSupply: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    discordInviteLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    etherscan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    planId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Project;
