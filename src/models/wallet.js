// src/models/wallet.js
class Wallet {
  constructor(address, publicKey) {
    this.address = address;
    this.publicKey = publicKey;
    this.balance = 0;
  }
}
module.exports = Wallet;