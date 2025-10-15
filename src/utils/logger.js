// src/utils/logger.js
const cfg = require('../config/logger');
module.exports = {
  info(msg) { console.log(cfg.format('info', msg)); },
  warn(msg) { console.warn(cfg.format('warn', msg)); },
  error(msg) { console.error(cfg.format('error', msg)); },
};