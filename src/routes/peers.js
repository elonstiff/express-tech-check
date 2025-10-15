// src/routes/peers.js
const r = require('express').Router();
const ctrl = require('../controllers/peerController');

r.get('/', ctrl.listPeers);
r.post('/', ctrl.addPeer);

module.exports = r;