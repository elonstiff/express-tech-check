// src/models/block.js
class Block {
  constructor(index, previousHash, timestamp, transactions, nonce, hash) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.nonce = nonce;
    this.hash = hash;
  }
}
module.exports = Block;