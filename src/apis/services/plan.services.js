const Plan = require("../../database/models/plan.model");

/**
 * create new plan
 * @param {number} planId
 * @param {string} planName
 * @param {number} price usdt
 * @param {number} period unix timestamp
 * @param {string} description allowNull
 */
const createNewPlan = async (planId, planName, price, period, description) => {
  const existed = await Plan.findOne({ where: { planId } });
  if (!existed) {
    await Plan.create({
      planName,
      price,
      period,
      description,
    });
  } else {
    throw Error("invalid input data");
  }
};

const getAllPlans = async (attributes = []) => {
  const plans = await Plan.findAll({
    attributes,
  });
  return plans;
};

const getPlanById = async (planId, attributes = []) => {
  const plan = await Plan.findOne({ where: { planId } }, attributes);
  return plan;
};

const updatePlan = async (planId, data) => {
  await Plan.update(data, { where: { planId } });
};

module.exports = {
  createNewPlan,
  getAllPlans,
  getPlanById,
  updatePlan,
};
