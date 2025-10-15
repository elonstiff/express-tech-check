// src/config/logger.js
module.exports = {
  level: process.env.LOG_LEVEL || 'info',
  format: (level, msg) => `[${new Date().toISOString()}] ${level.toUpperCase()}: ${msg}`,
};