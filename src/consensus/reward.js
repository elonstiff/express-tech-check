// src/consensus/reward.js
module.exports = {
  getBlockReward(height) {
    // simple halving every 210000 blocks
    const halvings = Math.floor(height / 210000);
    return Math.max(0, 50 / (2 ** halvings));
  },
};