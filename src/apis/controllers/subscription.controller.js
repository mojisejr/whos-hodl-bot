const catchAsync = require("../utils/catchAcsync");
const {
  createNewSubscription,
  getAllSubscription,
  getExpiredSubscriptions,
  getUnexpiredSubscriptions,
  getSubscriptionByGuildId,
  getSubscriptionsByDiscordId,
  updateSubscription,
  deleteSubscriptionByGuildId,
  deleteSubscriptionsByDiscordId,
} = require("../services/subscription.service");

const { getPlanById } = require("../services/plan.services");

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

const addNewSubscription = catchAsync(async (req, res) => {
  const { discordGuildId, ownerDiscordId, ownerWallet, planId, start } =
    req.body;
  const { period } = await getPlanById(planId, ["period"]);
  if (period <= 0) {
    res.status(500).json({
      result: "Error",
      message: "Invalid Plan",
    });
  } else {
    const result = await createNewSubscription(
      discordGuildId,
      ownerDiscordId,
      ownerWallet,
      planId,
      period,
      start
    );
    res.status(201).json({
      result: "OK",
      data: result,
    });
  }
});

const getSubscriptions = catchAsync(async (req, res) => {
  const result = await getAllSubscription().catch((e) =>
    res.status(403).json({
      result: "Error",
      message: e.message,
    })
  );
  res.status(200).json({
    result: "OK",
    data: result,
  });
});

const getSubscriptionByDiscordGuildId = catchAsync(async (req, res) => {
  const { discordGuildId } = req.params;
  const subscribe = await getSubscriptionByGuildId(discordGuildId).catch((e) =>
    res.status(403).json({ result: "Error", message: e.message })
  );
  res.status(200).json({
    result: "OK",
    data: subscribe,
  });
});

const getSubscriptionByOwnerDiscordId = catchAsync(async (req, res) => {
  const { ownerDiscordId } = req.params;
  console.log(ownerDiscordId);
  const subscribes = await getSubscriptionsByDiscordId(ownerDiscordId).catch(
    (e) => res.status(403).json({ result: "error", message: e.message })
  );

  res.status(200).json({
    result: "OK",
    count: subscribes.length,
    data: subscribes,
  });
});

const updateSubscriptionStatus = catchAsync(async (req, res) => {
  const { discordGuildId } = req.params;
  const data = req.body;
  await updateSubscription(discordGuildId, data).catch((e) =>
    res.status(403).json({ result: "Error", message: e.message })
  );
  res.status(200).json({
    result: "OK",
  });
});

module.exports = {
  addNewSubscription,
  getSubscriptions,
  getSubscriptionByDiscordGuildId,
  getSubscriptionByOwnerDiscordId,
  updateSubscriptionStatus,
};
