// src/models/utxo.js
class UTXO {
  constructor(txId, index, address, amount) {
    this.txId = txId;
    this.index = index;
    this.address = address;
    this.amount = amount;
  }
}
module.exports = UTXO;