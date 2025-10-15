// src/crypto/mnemonic.js
// placeholder mnemonic generator
const crypto = require('crypto');
exports.generate = () => crypto.randomBytes(16).toString('hex');
exports.seedToPriv = (seed) => require('./keygen').newKeypair();