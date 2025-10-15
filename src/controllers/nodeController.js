// src/controllers/nodeController.js
const peerService = require('../services/peerService');

exports.info = (req, res) => {
  res.json({ peers: peerService.list(), uptime: process.uptime() });
};