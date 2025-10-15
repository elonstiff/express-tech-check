// src/crypto/hash.js
const crypto = require('crypto');
exports.sha256 = (data) => crypto.createHash('sha256').update(data).digest('hex');
exports.ripemd160 = (data) => crypto.createHash('ripemd160').update(data).digest('hex');