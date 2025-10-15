// src/routes/node.js
const r = require('express').Router();
const ctrl = require('../controllers/nodeController');

r.get('/info', ctrl.info);

module.exports = r;