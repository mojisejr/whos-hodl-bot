const createRole = async (client, guildId, roleName, color) => {
  const guild = client.guilds.cache.get(guildId);
  const role = await guild.roles.create({
    name: roleName,
    color: color,
  });
  return role;
};

// const createRoles = async (client, guild, rolesData) => {};

const fetchRole = async (client, guildId, roleName) => {
  console.log(roleName);
  const guild = client.guilds.cache.get(guildId);
  const roles = await guild.roles.fetch();
  const role = roles.find((role) => {
    return role.name === roleName;
  });
  return role;
};

const setRole = async (client, guildId, userId, roleName) => {
  const guild = client.guilds.cache.get(guildId);
  const member = await guild.members.fetch();
  const user = await member.get(userId);
  const role = await fetchRole(client, guildId, roleName);
  await user.roles.add(role);
};

const removeRole = async (client, guildId, userId, roleName) => {
  const guild = client.guilds.cache.get(guildId);
  const member = await guild.members.fetch();
  const user = await member.get(userId);
  const role = await fetchRole(client, guildId, roleName);
  await user.roles.remove(role);
};

module.exports = { createRole, fetchRole, setRole, removeRole };
