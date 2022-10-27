const Message = require("../../database/models/message.model");

/**
 *
 * @param {string} discordGuildId
 * @param {string} newMessage
 * @param {number} level
 * @returns
 */

const createMessage = async (discordGuildId, newMessage, level) => {
  const [message, created] = await Message.findOrCreate({
    where: { discordGuildId, message },
    defaults: { discordGuildId, message: newMessage, level },
  });

  if (created) {
    return message;
  } else {
    throw new Error(
      `${newMessage} for guild id: ${discordGuildId} is already existed`
    );
  }
};

const getMessageByGuildId = async (discordGuildId) => {
  const messages = await Message.findAll({ where: { discordGuildId } });
  return messages;
};

const updateMessage = async (discordGuildId, newMessage, data) => {
  await Message.update(data, {
    where: { discordGuildId, message: newMessage },
  });
};

const deleteMessage = async (discordGuildId, newMessage) => {
  await Message.deleteRole({ where: { discordGuildId, message: newMessage } });
};

module.exports = {
  createMessage,
  getMessageByGuildId,
  updateMessage,
  deleteMessage,
};
