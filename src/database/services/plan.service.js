const Plan = require("../models/plan.model");

const addNewPlan = async () => {
  const existed = await Plan.findOne({ guildId }, { where: { guildId } });
  console.log(existed);
};
const updatePlan = async () => {};
const deletePlan = async () => {};

module.exports = {
  addNewPlan,
  updatePlan,
  deletePlan,
};
