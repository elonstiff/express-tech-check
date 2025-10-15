// src/models/transaction.js
class Transaction {
  constructor(id, from, to, amount, fee = 0) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.amount = amount;
    this.fee = fee;
    this.timestamp = Date.now();
  }
}
module.exports = Transaction;