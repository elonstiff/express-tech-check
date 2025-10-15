// src/services/blockchainService.js
const { genesis } = require('../config/blockchain');
const cryptoUtil = require('../utils/cryptoUtil');
const config = require('../config/constants');
let chain = [genesis];

function calculateHash(block) {
  return cryptoUtil.hash(JSON.stringify({
    index: block.index,
    timestamp: block.timestamp,
    previousHash: block.previousHash,
    nonce: block.nonce,
    transactions: block.transactions,
  }));
}

module.exports = {
  getChain: () => chain,
  getBlockByIndex: (i) => chain.find(b => b.index === i),
  getLatest: () => chain[chain.length - 1],
  addBlock(block) {
    const latest = this.getLatest();
    if (block.previousHash !== latest.hash) throw new Error('invalid previous hash');
    if (calculateHash(block) !== block.hash) throw new Error('invalid hash');
    chain.push(block);
    return block;
  },
  createBlock(transactions = [], nonce = 0) {
    const prev = this.getLatest();
    const block = {
      index: prev.index + 1,
      timestamp: Date.now(),
      previousHash: prev.hash,
      nonce,
      transactions,
    };
    block.hash = calculateHash(block);
    return block;
  },
  replaceChain(newChain = []) {
    if (!Array.isArray(newChain) || newChain.length <= chain.length) return false;
    chain = newChain;
    return true;
  },
  getDifficulty() { return 4; /* placeholder */ },
};