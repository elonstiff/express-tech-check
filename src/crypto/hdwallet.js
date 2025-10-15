// src/crypto/hdwallet.js
const keygen = require('./keygen');
module.exports = {
  derive(seed, index = 0) {
    // simplistic derivation (do NOT use in production)
    return keygen.newKeypair();
  },
};