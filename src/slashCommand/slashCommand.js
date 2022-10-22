require("dotenv").config();
const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

clientId = "1013327146393014292";
guildId = "964899859113078845";

const commands = [
  new SlashCommandBuilder()
    .setName("verify")
    .setDescription(
      "start verify : link to website -> connect wallet -> and verify"
    ),
].map((command) => command.toJSON());

const rest = new REST({ version: 9 }).setToken(process.env.token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("successful"))
  .catch(console.error);
