// src/services/syncService.js
const p2p = require('./p2pService');
const blockchainService = require('./blockchainService');

p2p.on('broadcast', (msg) => {
  if (msg.type === 'chain') blockchainService.replaceChain(msg.chain);
});

module.exports = {
  requestSync() { /* ask peers for chain */ },
};