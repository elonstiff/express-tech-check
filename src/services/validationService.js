// src/services/validationService.js
const cryptoUtil = require('../utils/cryptoUtil');

module.exports = {
  validBlock(block) {
    // basic checks
    if (!block.hash) return false;
    if (cryptoUtil.hash(JSON.stringify({ ...block, hash: undefined })) !== block.hash) return false;
    return true;
  },
  validTx(tx) {
    return typeof tx.id === 'string' && tx.amount > 0;
  },
};