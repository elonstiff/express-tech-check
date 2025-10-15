// src/routes/explorer.js
const r = require('express').Router();
const ctrl = require('../controllers/explorerController');

r.get('/status', ctrl.status);

module.exports = r;