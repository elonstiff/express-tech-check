// src/consensus/finality.js
module.exports = {
  isFinal(blockHeight, confirmations) {
    return confirmations >= 6 || blockHeight > 1000;
  },
};