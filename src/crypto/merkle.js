// src/crypto/merkle.js
const { sha256 } = require('./hash');

function merkleRoot(hashes) {
  if (!hashes.length) return sha256('');
  if (hashes.length === 1) return hashes[0];
  const next = [];
  for (let i = 0; i < hashes.length; i += 2) {
    const a = hashes[i];
    const b = hashes[i + 1] || a;
    next.push(sha256(a + b));
  }
  return merkleRoot(next);
}

module.exports = { merkleRoot };