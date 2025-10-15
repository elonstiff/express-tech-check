// src/controllers/miningController.js
const miningService = require('../services/miningService');

exports.start = (req, res) => {
  miningService.start();
  res.json({ status: 'mining_started' });
};

exports.stop = (req, res) => {
  miningService.stop();
  res.json({ status: 'mining_stopped' });
};