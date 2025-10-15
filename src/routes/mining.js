// src/routes/mining.js
const r = require('express').Router();
const ctrl = require('../controllers/miningController');

r.post('/start', ctrl.start);
r.post('/stop', ctrl.stop);

module.exports = r;