const catchAsync = require("../../utils/catchAcsync");
const client = require("../../../discord/discord.client");
const { createNewHolder } = require("../../services/holder.service");
const { getRolesByGuildId } = require("../../services/role.service");
const { getProjectByGuild } = require("../../services/project.service");
const { setRole } = require("../../../discord/handlers/role.handler");
const { getContract } = require("../../../blockchain");

const verifyHolder = catchAsync(async ({ body }, res) => {
  //1 get wallet address, nftAddress

  const { walletAddress, discordId, discordGuildId } = body;
  const { nftAddress } = await getProjectByGuild(discordGuildId);
  const contract = getContract(nftAddress);
  const balance = (await contract.balanceOf(walletAddress)).toString();
  if (balance <= 0) {
    res.status(403).json({
      result: "Error",
      message: "Invalid balance",
    });
  } else {
    const role = await getRolesByGuildId(discordGuildId);
    await createNewHolder(
      nftAddress,
      discordId,
      walletAddress,
      balance,
      new Date().getTime(),
      true
    );
    // ตรงนี้ ไม่ยอมทำงาน
    const roleData = role[0].dataValues.role;
    await setRole(client, discordGuildId, discordId, roleData);

    res.status(200).json({
      result: "OK",
    });
  }
});

module.exports = {
  verifyHolder,
};
