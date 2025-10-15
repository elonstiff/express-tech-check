// src/services/peerService.js
const peers = new Set();
const cfg = require('../config/peer');

module.exports = {
  list: () => Array.from(peers),
  add(url) {
    if (!url) return;
    if (peers.size >= cfg.maxPeers) return;
    peers.add(url);
  },
  remove(url) { peers.delete(url); },
};