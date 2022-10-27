const express = require("express");
const {
  getAllMessages,
  updateMessageById,
  deleteMessageById,
  newMessage,
} = require("../../controllers/message.controller");

const router = express.Router();

//@NON: message routes

router.get("/:discordGuildId", getAllMessages);
router.put("/:discordGuildId", updateMessageById);
router.post("/new", newMessage);

module.exports = router;
