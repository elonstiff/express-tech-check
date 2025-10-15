// src/controllers/explorerController.js
const blockchainService = require('../services/blockchainService');

exports.status = (req, res) => {
  res.json({
    height: blockchainService.getChain().length - 1,
    difficulty: blockchainService.getDifficulty(),
  });
};