const client = require("../discord.client");
const { Events } = require("discord.js");
const {
  onVerify,
  onVerifyButtonClicked,
} = require("../handlers/verify.handler");

//@NON: send verify box to user for connect to website
client.on(Events.InteractionCreate, async (interaction) =>
  onVerify(interaction)
);
