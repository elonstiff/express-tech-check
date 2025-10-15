// src/models/peer.js
class Peer {
  constructor(url) {
    this.url = url;
    this.lastSeen = Date.now();
  }
}
module.exports = Peer;