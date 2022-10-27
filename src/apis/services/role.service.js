const Role = require("../../database/models/role.model");

/**
 *
 * @param {string} discordGuildId
 * @param {string} roleName
 * @param {number} level
 * @returns
 */

const createRole = async (discordGuildId, roleName, level) => {
  const [role, created] = await Role.findOrCreate({
    where: { discordGuildId, role: roleName },
    defaults: { discordGuildId, role: roleName, level },
  });

  if (created) {
    return role;
  } else {
    throw new Error(
      `${roleName} for guild id: ${discordGuildId} is already existed`
    );
  }
};

const getRolesByGuildId = async (discordGuildId) => {
  const roles = await Role.findAll({ where: { discordGuildId } });
  return roles;
};

const updateRole = async (discordGuildId, roleName, data) => {
  await Role.update(data, { where: { discordGuildId, roleName } });
};

const deleteRole = async (discordGuildId, roleName) => {
  await Role.deleteRole({ where: { discordGuildId, roleName } });
};

module.exports = {
  createRole,
  getRolesByGuildId,
  updateRole,
  deleteRole,
};
