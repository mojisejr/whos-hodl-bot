const catchAsync = require("../utils/catchAcsync");
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
  const { discordGuildId, roleName, level } = req.body;
  const result = await createRole(discordGuildId, roleName, level).catch((e) =>
    res.status(403).json({
      result: "Error",
      message: e.message,
    })
  );
  res.staus(201).json({
    result: "OK",
    data: result,
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
