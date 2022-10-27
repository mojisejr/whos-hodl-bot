const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.bitkubchain.io"
);

const getContract = (address) => {
  const abi = [
    "function tokenURI(uint256 tokenId) public view returns(string memory)",
    "function balanceOf(address owner) public view returns(uint256)",
  ];
  const contract = new ethers.Contract(address, abi, provider);
  return contract;
};

module.exports = {
  getContract,
};
