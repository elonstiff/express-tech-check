// src/services/feeService.js
module.exports = {
  estimateFee(tx) {
    // simple fee estimate
    return Math.max(1, Math.ceil((tx.amount || 1) * 0.001));
  },
};