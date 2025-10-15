// src/consensus/epoch.js
module.exports = {
  currentEpoch(blockHeight) { return Math.floor(blockHeight / 1000); },
};