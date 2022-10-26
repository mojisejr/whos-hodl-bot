const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Holder extends Model {}

Holder.init(
  {
    nftAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discordId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    walletAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    //@NON: unixtimestamp
    timestamp: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Holder;
