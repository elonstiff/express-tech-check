// src/routes/wallets.js
const r = require('express').Router();
const ctrl = require('../controllers/walletController');

r.post('/', ctrl.createWallet);
r.get('/:address/balance', ctrl.getBalance);

module.exports = r;