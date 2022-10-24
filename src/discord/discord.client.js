require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const { plan } = require("../constants/discord.config");

//@NON: Gateway Intents are used to give specific permission to our bot
const intents = [
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
];

//@NON: Client Object
const client = new Client({ intents });
client.once("ready", async () => onClientReady(plan.FREE));

async function onClientReady(plan) {
  console.log(`WHOsHODL [${plan} plan]: Discord client ready`);
}

//@NON: Login
client.login(process.env.token);

module.exports = client;
