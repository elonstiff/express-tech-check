// src/controllers/txController.js
const txService = require('../services/txService');

exports.createTx = (req, res) => {
  try {
    const tx = txService.createTransaction(req.body);
    res.json({ tx });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.getMempool = (req, res) => {
  res.json({ mempool: txService.getMempool() });
};