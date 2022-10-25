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
const {
  createNewPlan,
  getAllPlans,
  getPlanById,
  updatePlan,
} = require("../services/plan.services");

const addNewPlan = catchAsync(async (req, res) => {});
const addNewSubscription = catchAsync(async (req, res) => {});
