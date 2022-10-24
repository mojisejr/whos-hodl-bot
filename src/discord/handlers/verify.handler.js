const { ButtonStyle } = require("discord.js");
const { ActionRowBuilder, ButtonBuilder } = require("@discordjs/builders");
const verifyBox = require("../embeds/verify.embed");
const config = require("../../constants/discord.config");

async function onVerify(interaction) {
  if (!interaction.isChatInputCommand()) return;
  if (!interaction.deferred) {
    await interaction.deferReply();
  }

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setLabel("Verify")
      .setURL(
        `${config.verifyUrl}?discordId=${interaction.user.id}&guildId=${interaction.guildId}`
      )
      .setStyle(ButtonStyle.Link)
  );

  if (interaction.commandName == "verify") {
    await interaction.editReply({
      embeds: [verifyBox],
      ephemeral: true,
      components: [row],
    });
  }
}

module.exports = {
  onVerify,
};
