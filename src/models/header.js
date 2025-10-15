// src/models/header.js
class Header {
  constructor(index, previousHash, timestamp, nonce, hash) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.nonce = nonce;
    this.hash = hash;
  }
}
module.exports = Header;