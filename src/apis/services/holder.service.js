const Holder = require("../../database/models/holder.model");

/**
 *
 * @param {string} nftAddress
 * @param {string} discordId
 * @param {string} walletAddress
 * @param {string} balance
 * @param {number} timestamp
 * @param {boolean} verified
 * @returns
 */

const createNewHolder = async (
  nftAddress,
  discordId,
  walletAddress,
  balance,
  timestamp,
  verified
) => {
  const [newHolder, created] = await Holder.findOrCreate({
    where: { discordId, nftAddress },
    defaults: {
      nftAddress,
      discordId,
      walletAddress,
      balance,
      timestamp,
      verified,
    },
  });

  if (created) {
    return newHolder;
  } else {
    throw new Error(`${discordId} is been created for ${nftAddress} NFT.`);
  }
};

const getAllHolders = async () => {
  const results = await Holder.findAll();
  return results;
};

const getAllHoldersByNft = async (nftAddress) => {
  const results = await Holder.findAll({ where: { nftAddres } });
  return results;
};

const getHolder = async (discordId, nftAddress) => {
  const result = await Holder.findOne({ where: { discordId, nftAddress } });
  return result;
};

const getHolderByWallet = async (wallet, nftAddress) => {
  const result = await Holder.findOne({ where: { discordId, nftAddress } });
  return result;
};

const updateHolder = async (discordId, nftAddress, data) => {
  await Holder.update(data, { where: { discordId, nftAddress } });
};

const updateVerifyStatus = async (discordId, nftAddress, verified) => {
  await Holder.update({ verified }, { where: { discordId, nftAddress } });
};

const updateHolderBalance = async (discordId, nftAddress, balance) => {
  await Holder.update({ balance }, { where: { discordId, nftAddress } });
};
const deleteHolder = async (discordId, nftAddress) => {
  await Holder.delete({ where: { discordId, nftAddress } });
};

module.exports = {
  createNewHolder,
  getAllHolders,
  getAllHoldersByNft,
  getHolder,
  getHolderByWallet,
  updateHolderBalance,
  updateVerifyStatus,
  updateHolder,
  deleteHolder,
};
