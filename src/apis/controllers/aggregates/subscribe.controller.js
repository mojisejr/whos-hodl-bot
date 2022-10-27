const catchAsync = require("../../utils/catchAcsync");
const { getPlanById } = require("../../services/plan.services");
const { createNewProject } = require("../../services/project.service");
const { createRole } = require("../../services/role.service");
const {
  createNewSubscription,
} = require("../../services/subscription.service");

const createSubscription = catchAsync(async ({ params, body }, res) => {
  const {
    nftAddress,
    ownerDiscordId,
    discordGuildId,
    ownerWalletAddress,
    projectName,
    totalSupply,
    symbol,
    website,
    facebook,
    twitter,
    discordInviteLink,
    etherscan,
    planId,
    roleName,
  } = body;
  //get plan data
  const plan = await getPlanById(planId);
  //create proejct
  const project = await createNewProject(
    nftAddress,
    ownerDiscordId,
    discordGuildId,
    ownerWalletAddress,
    projectName,
    totalSupply,
    symbol,
    website,
    facebook,
    twitter,
    discordInviteLink,
    etherscan,
    plan.planId
  );

  //create subscription
  await createNewSubscription(
    discordGuildId,
    ownerDiscordId,
    ownerWalletAddress,
    plan.planId,
    plan.period,
    new Date().getTime()
  );
  //add role
  await createRole(discordGuildId, roleName, 1);
  res.status(200).json({
    result: "OK",
    data: {
      ...project,
      ...plan,
    },
  });
});

module.exports = {
  createSubscription,
};
