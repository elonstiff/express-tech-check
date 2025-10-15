// src/controllers/blockController.js
const blockchainService = require('../services/blockchainService');

exports.getChain = (req, res) => {
  res.json({ chain: blockchainService.getChain(), length: blockchainService.getChain().length });
};

exports.getBlock = (req, res) => {
  const block = blockchainService.getBlockByIndex(parseInt(req.params.index, 10));
  if (!block) return res.status(404).json({ error: 'block not found' });
  res.json(block);
};

exports.submitBlock = (req, res) => {
  const block = req.body;
  try {
    blockchainService.addBlock(block);
    return res.json({ status: 'accepted' });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};