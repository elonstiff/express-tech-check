// src/routes/blocks.js
const r = require('express').Router();
const ctrl = require('../controllers/blockController');

r.get('/', ctrl.getChain);
r.get('/:index', ctrl.getBlock);
r.post('/', ctrl.submitBlock);

module.exports = r;