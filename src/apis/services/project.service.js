const Project = require("../../database/models/project.model");

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

const createNewProject = async (
  nftAddress,
  ownerDiscordId,
  discordGuildId,
  ownerWalletAddress,
  projectName,
  totalSupply,
  symbol,
  roles,
  messages,
  website,
  facebook,
  discordInviteLink,
  etherscan
) => {
  const [newProject, created] = await Project.findOrCreate({
    where: { discordGuildId },
    defaults: {
      nftAddress,
      ownerDiscordId,
      discordGuildId,
      ownerWalletAddress,
      projectName,
      totalSupply,
      symbol,
      roles,
      messages,
      website,
      facebook,
      discordInviteLink,
      etherscan,
    },
  });
  if (created) {
    return newProject;
  }
};

const getAllProjects = async () => {
  const results = await Project.findAll();
  return results;
};

const getProjectByNftAddress = async (nftAddress) => {
  const results = await Project.findOne({ where: { nftAddress } });
  return results;
};

const getProjectsByOwner = async (ownerDiscordId) => {
  const results = await Project.findAll({ where: { ownerDiscordId } });
  return results;
};

const updateProject = async (nftAddress, data) => {
  await Project.update(data, { where: nftAddress });
};

const deleteProject = async (nftAddress) => {
  await Project.delete({ where: nftAddress });
};

module.exports = {
  createNewProject,
  getAllProjects,
  getProjectByNftAddress,
  getProjectsByOwner,
  updateProject,
  deleteProject,
};
