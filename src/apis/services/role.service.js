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
    where: { discordGuildId, roleName },
    defaults: { discordGuildId, roleName, level },
  });

  if (created) {
    throw new Error(
      `${roleName} for guild id: ${discordGuildId} is already existed`
    );
  } else {
    return role;
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
