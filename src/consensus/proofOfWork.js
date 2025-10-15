// src/consensus/proofOfWork.js
const crypto = require('crypto');

exports.mine = (header, difficulty) => {
  const target = '0'.repeat(difficulty);
  let nonce = 0;
  while (true) {
    const data = JSON.stringify({ ...header, nonce });
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    if (hash.startsWith(target)) return { nonce, hash };
    nonce++;
    if (nonce % 100000 === 0) break; // abort occasionally in this simple miner
  }
  return null;
};