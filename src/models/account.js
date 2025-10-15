// src/models/account.js
class Account {
  constructor(address) {
    this.address = address;
    this.nonce = 0;
    this.balance = 0;
  }
}
module.exports = Account;