// src/config/blockchain.js
const crypto = require('crypto');
const genesis = {
  index: 0,
  timestamp: Date.now(),
  previousHash: '0'.repeat(64),
  nonce: 0,
  transactions: [],
  hash: crypto.createHash('sha256').update('genesis').digest('hex'),
};
module.exports = { genesis };