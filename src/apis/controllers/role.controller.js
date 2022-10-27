const catchAsync = require("../utils/catchAcsync");
const client = require("../../discord/discord.client");
const discord = require("../../discord/handlers/role.handler");

const {
  createRole,
  getRolesByGuildId,
  updateRole,
  deleteRole,
} = require("../services/role.service");

/**
 *
 * @param {string} discordGuildId
 * @param {string} roleName
 * @param {number} level
 * @returns
 */

const newRole = catchAsync(async (req, res) => {
  const { discordGuildId, roleName, level, color } = req.body;

  createRole(discordGuildId, roleName, level)
    .then(async (response) => {
      res.status(201).json({
        result: "OK",
        data: response,
      });
    })
    .catch((e) => {
      res.status(403).json({
        result: "Error",
        message: e.message,
      });
    });
});

const getAllRoles = catchAsync(async (req, res) => {
  const { discordGuildId } = req.params;
  const roles = await getRolesByGuildId(discordGuildId).catch((e) =>
    res.status(403).json({
      result: "Error",
      message: e.message,
    })
  );

  res.status(200).json({
    result: "OK",
    data: roles,
  });
});

const updateRoleById = catchAsync(async (req, res) => {
  const { roleName } = req.body;
  const { discordGuildId } = req.params;
  await updateRole(discordGuildId, roleName);
});
const deleteRoleById = catchAsync(async (req, res) => {
  const { discordGuildId } = req.params;
  await deleteRole(discordGuildId);
});

module.exports = {
  newRole,
  getAllRoles,
  updateRoleById,
  deleteRoleById,
};
