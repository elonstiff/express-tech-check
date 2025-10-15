// src/routes/chain.js
const r = require('express').Router();
const ctrl = require('../controllers/chainController');

r.post('/sync', ctrl.sync);

module.exports = r;