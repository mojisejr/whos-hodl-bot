const Plan = require("../../database/models/plan.model");

/**
 * create new plan
 * @param {number} planId
 * @param {string} planName
 * @param {number} price usdt
 * @param {number} period unix timestamp
 * @param {string} description allowNull
 */
const createNewPlan = async (planName, price, period, description) => {
  const [newPlan, created] = await Plan.findOrCreate({
    where: { planName },
    defaults: {
      planName,
      price,
      period,
      description,
    },
  });
  if (created) {
    return newPlan;
  } else {
    throw Error("This plan is already added");
  }
};

const getAllPlans = async (
  attributes = ["planId", "planName", "price", "period", "description"]
) => {
  const plans = await Plan.findAll({
    attributes,
  });
  return plans;
};

const getPlanById = async (
  planId,
  attributes = ["planId", "planName", "price", "period", "description"]
) => {
  const plan = await Plan.findOne({ where: { planId } }, attributes);
  return plan;
};

const updatePlan = async (planId, data) => {
  await Plan.update(data, { where: { planId } });
};

const deletePlan = async (planId) => {
  await Plan.delete({ where: { planId } });
};

module.exports = {
  createNewPlan,
  getAllPlans,
  getPlanById,
  updatePlan,
  deletePlan,
};
