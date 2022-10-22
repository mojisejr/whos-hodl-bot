const { ButtonStyle } = require("discord.js");
const { ActionRowBuilder, ButtonBuilder } = require("@discordjs/builders");
const verifyBox = require("../embeds/verify.embed");

async function onVerify(interaction) {
  if (!interaction.isChatInputCommand()) return;
  if (!interaction.deferred) {
    await interaction.deferReply();
  }

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("getVerifyWeb")
      .setLabel("Verify")
      .setStyle(ButtonStyle.Primary)
  );

  if (interaction.commandName == "verify") {
    await interaction.editReply({
      embeds: [verifyBox],
      ephemeral: true,
      components: [row],
    });
  }
}

async function onVerifyButtonClicked(interaction) {
  if (!interaction.isButton()) return;
  if (!interaction.deferred) {
    await interaction.deferReply();
  }
  console.log(interaction);
  await interaction.editReply({ content: "CLICKED !" });
}

module.exports = {
  onVerify,
  onVerifyButtonClicked,
};
