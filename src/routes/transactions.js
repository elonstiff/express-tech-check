// src/routes/transactions.js
const r = require('express').Router();
const ctrl = require('../controllers/txController');

r.get('/mempool', ctrl.getMempool);
r.post('/', ctrl.createTx);

module.exports = r;