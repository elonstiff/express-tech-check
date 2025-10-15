// src/controllers/chainController.js
const blockchainService = require('../services/blockchainService');

exports.sync = (req, res) => {
  blockchainService.replaceChain(req.body.chain);
  res.json({ status: 'synced' });
};