// src/controllers/peerController.js
const peerService = require('../services/peerService');

exports.listPeers = (req, res) => {
  res.json({ peers: peerService.list() });
};

exports.addPeer = (req, res) => {
  const { url } = req.body;
  peerService.add(url);
  res.json({ status: 'ok' });
};