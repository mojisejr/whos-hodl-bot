const catchAsync = require("../utils/catchAcsync");
const {
  createNewProject,
  getAllProjects,
  getProjectByNftAddress,
  getProjectsByOwner,
  getProjectByGuild,
  getProjectByPlan,
  updateProject,
  deleteProject,
} = require("../services/project.service");

/**
 *
 * @param {string} nftAddress
 * @param {string} ownerDiscordId
 * @param {string} discordGuildId
 * @param {string} ownerWalletAddress
 * @param {string} projectName
 * @param {number} totalSupply
 * @param {string} symbol
 * @param {string} website
 * @param {string} facebook
 * @param {string} twitter
 * @param {string} discordInviteLink
 * @param {string} etherscan
 */

const addNewProject = catchAsync(async (req, res) => {
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
  } = req.body;
  const result = await createNewProject(
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
    planId
  ).catch((e) => res.status(403).json({ result: "OK", message: e.message }));
  res.status(201).json({
    result: "OK",
    data: result,
  });
});

const getProjects = catchAsync(async (req, res) => {
  const results = await getAllProjects().catch((e) =>
    res.status(403).json({
      result: "Error",
      message: e.message,
    })
  );
  res.status(200).json({
    result: "OK",
    data: results,
  });
});

const getProjectByNft = catchAsync(async (req, res) => {
  const { nftAddress } = req.params;
  const result = await getProjectByNftAddress(nftAddress).catch((e) =>
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

const getProjectsByOwnerId = catchAsync(async (req, res) => {
  const { ownerDiscordId } = req.params;
  const results = await getProjectsByOwner(ownerDiscordId).catch((e) =>
    res.status(403).json({
      result: "Error",
      message: e.message,
    })
  );
  res.status(200).json({
    result: "OK",
    data: results,
  });
});

const getProjectByGuildId = catchAsync(async (req, res) => {
  const { discordGuildId } = req.params;
  const results = await getProjectByGuild(discordGuildId).catch((e) =>
    res.status(403).json({
      result: "OK",
      message: e.message,
    })
  );
  res.status(200).json({
    result: "OK",
    data: results,
  });
});

const getProjectByPlanId = catchAsync(async (req, res) => {
  const { planId } = req.params;
  const results = await getProjectByPlan(planId).catch((e) =>
    res.status(403).json({
      result: "OK",
      message: e.message,
    })
  );
  res.status(200).json({
    result: "OK",
    data: results,
  });
});

const updateProjectByGuildId = catchAsync(async (req, res) => {
  const { discordGuildId } = req.params;
  const data = req.body;
  await updateProject(discordGuildId, data).catch((e) =>
    res.status(403).json({ result: "Error", message: e.message })
  );
  res.status(200).json({
    result: "OK",
  });
});

const deleteProjectByGuildId = catchAsync(async (req, res) => {
  const { discordGuildId } = req.params;
  await deleteProject(discordGuildId).catch((e) =>
    res.status(403).json({ result: "Error", message: e.message })
  );
  res.status(200).json({
    result: "OK",
  });
});

module.exports = {
  addNewProject,
  getProjects,
  getProjectByNft,
  getProjectsByOwnerId,
  getProjectByGuildId,
  getProjectByPlanId,
  updateProjectByGuildId,
  deleteProjectByGuildId,
};
