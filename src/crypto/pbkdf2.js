// src/crypto/pbkdf2.js
const crypto = require('crypto');
exports.derive = (pass, salt, iter = 100000, keylen = 32) =>
  crypto.pbkdf2Sync(pass, salt, iter, keylen, 'sha512').toString('hex');