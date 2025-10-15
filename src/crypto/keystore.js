// src/crypto/keystore.js
const fs = require('fs');
const path = require('path');

module.exports = {
  saveKey(dir, name, pem) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, name), pem, { mode: 0o600 });
  },
  loadKey(pathToFile) {
    return fs.readFileSync(pathToFile, 'utf8');
  },
};