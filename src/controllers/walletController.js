// src/controllers/walletController.js
const walletService = require('../services/walletService');

exports.createWallet = (req, res) => {
  const wallet = walletService.create();
  res.json({ wallet });
};

exports.getBalance = (req, res) => {
  const address = req.params.address;
  const balance = walletService.getBalance(address);
  res.json({ address, balance });
};