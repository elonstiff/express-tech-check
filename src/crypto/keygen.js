// src/crypto/keygen.js
const { generateKeypair } = require('./ecc');

module.exports = {
  newKeypair() {
    const { publicKey, privateKey } = generateKeypair();
    return {
      publicKey: publicKey.export({ type: 'spki', format: 'pem' }),
      privateKey: privateKey.export({ type: 'pkcs8', format: 'pem' }),
    };
  },
};