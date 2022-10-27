const express = require("express");
const {
  addNewPlan,
  getPlanList,
  getPlan,
} = require("../../controllers/plan.controller");

const {
  addNewSubscription,
  updateSubscriptionStatus,
  getSubscriptions,
  getSubscriptionByDiscordGuildId,
  getSubscriptionByOwnerDiscordId,
} = require("../../controllers/subscription.controller");

const {
  createSubscription,
} = require("../../controllers/aggregates/subscribe.controller");

const router = express.Router();

//@NON: Plan routes
router.get("/plan", getPlanList);
router.get("/plan/:planId", getPlan);
router.post("/plan/new", addNewPlan);

//@NON: Subscription routes
router.get("/subscribe", getSubscriptions);
router.post("/subscribe", createSubscription);
router.get("/subscribe/guild/:discordGuildId", getSubscriptionByDiscordGuildId);
router.put("/subscribe/guild/:discordGuildId", updateSubscriptionStatus);
router.get("/subscribe/owner/:ownerDiscordId", getSubscriptionByOwnerDiscordId);
router.post("/subscribe/new", addNewSubscription);

module.exports = router;
