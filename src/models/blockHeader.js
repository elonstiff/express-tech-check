// src/models/blockHeader.js
const Header = require('./header');
class BlockHeader extends Header {
  constructor(index, previousHash, timestamp, merkleRoot, nonce, hash) {
    super(index, previousHash, timestamp, nonce, hash);
    this.merkleRoot = merkleRoot;
  }
}
module.exports = BlockHeader;