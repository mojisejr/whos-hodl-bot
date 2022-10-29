const { ethers } = require("ethers");
const client = require("../discord/discord.client");
const {
  fetchRole,
  setRole,
  removeRole,
} = require("../discord/handlers/role.handler");
const { getAllProjects } = require("../apis/services/project.service");
const { getHolderByWallet } = require("../apis/services/holder.service");
const { parseDataObject } = require("../apis/utils/parseSqliteObject");

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.bitkubchain.io"
);

const getContract = (address) => {
  const abi = [
    "function tokenURI(uint256 tokenId) public view returns(string memory)",
    "function balanceOf(address owner) public view returns(uint256)",
    "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  ];
  const contract = new ethers.Contract(address, abi, provider);
  return contract;
};

const onTransferEvent = async () => {
  console.log("on transfer function ready");
  const results = await getAllProjects();
  // const projects = parseDataObject(results);
  projects = [
    "0x6d5724cc5125c2de0debacb779a11307b3abade9",
    "0x9E718B5D46D100E021537E59130Bed9991D78eC0",
    "0x9f5eF88624bfEdAB84AcD900Be92D2f94acA23Af",
    "0xfF2f5342FF8fFfA17a04aA5CbC162001A25B71a7",
  ];
  projects.forEach((project) => {
    const contract = getContract(project);
    contract.on("Transfer", async (from, to, tokenId) => {
      console.log(
        `[${project}] : ${tokenId.toString()} from ${from} to ${to} transfered`
      );
      // if (isMarketPlace(to)) {
      //   await onTransferUpdateRole(from);
      // } else if (isMarketPlace(from)) {
      //   await onTransferUpdateRole(to);
      // } else {
      //   await onTransferUpdateRole(to);
      //   await onTransferUpdateRole(from);
      // }
    });
  });
};

onTransferEvent();

//tracking transfer event for give discord user a role and nickname
// punkkub.on("Transfer", async (from, to, tokenId) => {
//   if (isMarketPlace(to)) {
//     await onTransferUpdateRole(from);
//   } else if (isMarketPlace(from)) {
//     await onTransferUpdateRole(to);
//   } else {
//     await onTransferUpdateRole(to);
//     await onTransferUpdateRole(from);
//   }
// });

//TODO: ROLE
async function onTransferUpdateRole(wallet, contract, project) {
  const holderData = await getHolderByWallet(wallet, contract.address);
  const balance = await contract.balanceOf(wallet);
  if (balance > 0 && holderData && holderData.wallet == wallet) {
    console.log(`@${wallet} : is holder.`);
    const role = await fetchRole(client, project.discordGuilId, project.role);
    await setRole(client, project.discordGuilId, holderData.discordId);
    await updateVerificationStatus(wallet, balance, true);
  } else if (balance <= 0 && holderData && holderData.wallet == wallet) {
    console.log(`@${wallet} : is NOT holder`);
    await removeRole(client, project.discordGuildId, holderData.discordId);
    await updateVerificationStatus(wallet, balance, false);
  } else {
    console.log(`transfer from non-verified holder. @${wallet}`);
  }
}

//check if receiver is marketplace
function isMarketPlace(to) {
  let marketPlaceAddress = "0x874987257374cAE9E620988FdbEEa2bBBf757cA9";
  let middleAddress = "0xA51b0F76f0d7d558DFc0951CFD74BB85a70E2a95";

  if (to === marketPlaceAddress || to === middleAddress) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getContract,
};
