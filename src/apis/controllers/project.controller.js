const catchAsync = require("../utils/catchAcsync");
const {
  createNewProject,
  getAllProjects,
  getProjectByNftAddress,
  getProjectsByOwner,
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
 * @param {Array(string)} roles
 * @param {Array(string)} messages
 * @param {string} website
 * @param {string} facebook
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
  } = req.body;
});
const getProjects = catchAsync(async (req, res) => {});
const getProjectByNft = catchAsync(async (req, res) => {});

module.exports = {
  addNewProject,
  getProjects,
  getProjectByNft,
};
