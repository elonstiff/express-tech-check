// src/services/p2pService.js
const EventEmitter = require('events');
const peerService = require('../services/peerService');

class P2P extends EventEmitter {
  broadcast(msg) { /* placeholder: send to peers */ this.emit('broadcast', msg); }
  connectPeer(url) { peerService.add(url); this.emit('connect', url); }
}

module.exports = new P2P();