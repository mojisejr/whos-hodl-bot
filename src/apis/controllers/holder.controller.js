const {
  createNewHolder,
  getHolder,
  getAllHolders,
  getAllHoldersByNft,
  updateHolder,
  updateVerifyStatus,
  updateHolderBalance,
  deleteHolder,
} = require("../services/holder.service");
const catchAsync = require("../utils/catchAcsync");

/**
 *
 * @param {string} nftAddress
 * @param {string} discordId
 * @param {string} walletAddress
 * @param {string} balance
 * @param {number} timestamp
 * @param {boolean} verified
 * @returns
 */

const newHolder = catchAsync(async (req, res) => {
  const { nftAddress, discordId, walletAddress, balance, timestamp, verified } =
    req.body;
  const result = await createNewHolder(
    nftAddress,
    discordId,
    walletAddress,
    balance,
    timestamp,
    verified
  ).catch((e) =>
    res.status(403).json({
      result: "OK",
      message: e.message,
    })
  );
  res.status(201).json({
    result: "OK",
    data: result,
  });
});

const holder = catchAsync(async (req, res) => {
  const result = await getHolder().catch((e) =>
    res.status(403).json({
      result: "Error",
      message: e.message,
    })
  );

  res.status(200).json({
    result: "OK",
    data: result,
  });
});

const allHolders = catchAsync(async (req, res) => {
  const results = await getAllHolders().catch((e) =>
    res.status(403).json({
      result: "Error",
      message: e.message,
    })
  );

  res.status(200).json({
    result: "OK",
    count: results.length,
    data: results,
  });
});

const allHoldersByNft = catchAsync(async (req, res) => {
  const results = await getAllHoldersByNft().catch((e) =>
    res.status(403).json({
      result: "Error",
      message: e.message,
    })
  );

  res.status(200).json({
    result: "OK",
    count: results.length,
    data: results,
  });
});

const updateHolderById = catchAsync(async (req, res) => {
  const { discordId, nftAddress } = req.params;
  const data = req.body;
  await updateHolder(discordId, nftAddress, data).catch((e) =>
    res.status(403).json({
      result: "Error",
      message: e.message,
    })
  );

  res.status(200).json({
    result: "OK",
  });
});

const updateVerify = catchAsync(async (req, res) => {
  const { discordId, nftAddress } = req.params;
  const { verified } = req.body;
  await updateVerifyStatus(discordId, nftAddress, verified).catch((e) =>
    res.status(403).json({ result: "Error", message: e.message })
  );
  res.status(200).json({
    result: "OK",
  });
});

const updateBalance = catchAsync(async (req, res) => {
  const { discordId, nftAddress } = req.params;
  const { balance } = req.body;
  await updateHolderBalance(discordId, nftAddress, balance).catch((e) =>
    res.status(403).json({ result: "Error", message: e.message })
  );
  res.status(200).json({
    result: "OK",
  });
});

const deleteHolderById = catchAsync(async (req, res) => {
  const { discordId, nftAddress } = req.params;
  await deleteHolder(discordId, nftAddress).catch((e) =>
    res.status(403).json({
      result: "Error",
      message: e.message,
    })
  );
  res.status(200).json({
    result: "OK",
  });
});

module.exports = {
  newHolder,
  holder,
  allHoldersByNft,
  allHolders,
  updateHolderById,
  updateVerify,
  updateBalance,
  deleteHolderById,
};
