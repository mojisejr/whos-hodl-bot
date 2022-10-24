const Plan = require("../../database/models/plan.model");

const createNewPlan = async (planData) => {
  const { planId } = planData;
  const existed = await Plan.findOne({ planId }, { where: { planId } });
  if (!existed) {
    await Plan.create(planData);
  } else {
    throw Error("invalid input data");
  }
};

module.exports = {
  createNewPlan,
};
