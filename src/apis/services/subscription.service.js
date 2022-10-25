const Subscription = require("../../database/models/subscription.model");

/**
 *
 * @param {string} discordGuildId
 * @param {string} ownerDiscordId
 * @param {string} ownerWallet
 * @param {number} planId
 * @param {number} start
 * @param {number} end
 * @param {bool} expired
 */
const createNewSubscription = async (
  discordGuildId,
  ownerDiscordId,
  ownerWallet,
  planId,
  start,
  end,
  expired
) => {
  const [result, created] = await Subscription.findOrCreate({
    where: { discordGuildId },
    defaults: {
      discordGuildId,
      ownerDiscordId,
      ownerWallet,
      planId,
      start,
      end,
      expired,
    },
  });
  if (created) {
    throw new Error(`GuildId: ${discordGuildId} is already existed.`);
  } else {
    return result;
  }
};

const getAllSubscription = async () => {
  const results = await Subscription.findAll();
  return results;
};

const getExpiredSubscriptions = async () => {
  const result = await Subscription.findAll({ where: { expired: true } });
  return result;
};
const getUnexpiredSubscriptions = async () => {
  const result = await Subscription.findAll({ where: { expired: false } });
  return result;
};

/**
 *
 * @param {string} discordGuildId
 */
const getSubscriptionByGuildId = async (discordGuildId) => {
  const result = await Subscription.findOne({ where: { discordGuildId } });
};
/**
 *
 * @param {string} ownerDiscordId
 */
const getSubscriptionsByDiscordId = async (ownerDiscordId) => {
  const results = await Subscription.findOne({ where: ownerDiscordId });
  return results;
};

const updateSubscription = async (discordGuildId, data) => {
  await Subscription.update(data, { where: { discordGuildId } });
};

const deleteSubscriptionByGuildId = async (discordGuildId) => {
  await Subscription.delete({ where: discordGuildId });
};
const deleteSubscriptionsByDiscordId = async (ownerDiscordId) => {
  await Subscription.delete({ where: ownerDiscordId });
};

module.exports = {
  createNewSubscription,
  getAllSubscription,
  getExpiredSubscriptions,
  getUnexpiredSubscriptions,
  getSubscriptionByGuildId,
  getSubscriptionsByDiscordId,
  updateSubscription,
  deleteSubscriptionByGuildId,
  deleteSubscriptionsByDiscordId,
};
