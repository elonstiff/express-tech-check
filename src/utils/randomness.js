// src/utils/randomness.js
const crypto = require('crypto');
exports.randInt = (max) => crypto.randomInt(0, max);
exports.randHex = (len = 16) => crypto.randomBytes(len).toString('hex');