// src/services/txService.js
const uuid = require('crypto').randomUUID;
const mempool = [];

module.exports = {
  createTransaction({ from, to, amount, fee = 0 }) {
    if (!from || !to || !amount) throw new Error('invalid tx');
    const tx = { id: uuid(), from, to, amount, fee, ts: Date.now() };
    mempool.push(tx);
    return tx;
  },
  getMempool() { return mempool.slice(); },
  removeTx(id) {
    const idx = mempool.findIndex(t => t.id === id);
    if (idx >= 0) mempool.splice(idx, 1);
  },
};