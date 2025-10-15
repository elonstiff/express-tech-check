// src/services/walletService.js
const crypto = require('crypto');
const wallets = new Map();
const config = require('../config/wallet');

function createKeypair() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'secp256k1' });
  return {
    publicKey: publicKey.export({ type: 'spki', format: 'pem' }),
    privateKey: privateKey.export({ type: 'pkcs8', format: 'pem' }),
  };
}

module.exports = {
  create() {
    const keys = createKeypair();
    const address = config.addressPrefix + crypto.createHash('sha256').update(keys.publicKey).digest('hex').slice(0, 34);
    wallets.set(address, { keys, balance: config.defaultBalance });
    return { address, publicKey: keys.publicKey };
  },
  getBalance(address) {
    const w = wallets.get(address);
    return w ? w.balance : 0;
  },
  credit(address, amount) {
    const w = wallets.get(address) || { balance: 0 };
    w.balance = (w.balance || 0) + amount;
    wallets.set(address, w);
  },
};