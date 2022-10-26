const catchAsync = require("../utils/catchAcsync");
const {
  createMessage,
  getMessageByGuildId,
  updateMessage,
  deleteMessage,
} = require("../services/message.service");

/**
 *
 * @param {string} discordGuildId
 * @param {string} newMessage
 * @param {number} level
 * @returns
 */

const newMessage = catchAsync(async (req, res) => {
  const { discordGuildId, message, level } = req.body;
  const result = await createMessage(discordGuildId, message, level).catch(
    (e) =>
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

const getAllMessages = catchAsync(async (req, res) => {
  const { discordGuildId } = req.params;
  const messages = await getMessageByGuildId(discordGuildId).catch((e) =>
    res.status(403).json({
      result: "Error",
      message: e.message,
    })
  );

  res.status(200).json({
    result: "OK",
    data: messages,
  });
});

const updateMessageById = catchAsync(async (req, res) => {
  const { message } = req.body;
  const { discordGuildId } = req.params;
  await updateMessage(discordGuildId, message);
});
const deleteMessageById = catchAsync(async (req, res) => {
  const { discordGuildId } = req.params;
  await deleteMessage(discordGuildId);
});

module.exports = {
  newMessage,
  getAllMessages,
  updateMessageById,
  deleteMessageById,
};
