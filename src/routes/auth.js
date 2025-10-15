// src/routes/auth.js
const r = require('express').Router();
const ctrl = require('../controllers/authController');

r.post('/login', ctrl.login);

module.exports = r;