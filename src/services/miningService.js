// src/services/miningService.js
const EventEmitter = require('events');
const blockchainService = require('./blockchainService');
const txService = require('./txService');
const minerCfg = require('../config/miner');

class Miner extends EventEmitter {
  constructor() { super(); this.running = false; this.timer = null; }
  start() {
    if (this.running) return;
    this.running = true;
    this.timer = setInterval(() => this.mineTick(), minerCfg.intervalMs);
  }
  stop() { this.running = false; clearInterval(this.timer); }
  mineTick() {
    const transactions = txService.getMempool().slice(0, 10);
    const block = blockchainService.createBlock(transactions, Math.floor(Math.random() * 1e6));
    // naive PoW: accept immediately
    blockchainService.addBlock(block);
    transactions.forEach(t => txService.removeTx(t.id));
    this.emit('mined', block);
  }
}

module.exports = new Miner();