// src/models/mempool.js
class Mempool {
  constructor() {
    this.txs = [];
  }
  add(tx) { this.txs.push(tx); }
  remove(id) { this.txs = this.txs.filter(t => t.id !== id); }
  list() { return this.txs.slice(); }
}
module.exports = new Mempool();