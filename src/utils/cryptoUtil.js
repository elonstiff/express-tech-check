// src/utils/cryptoUtil.js
const crypto = require('crypto');

exports.hash = (data) => {
  return crypto.createHash('sha256').update(data).digest('hex');
};

exports.doubleHash = (data) => {
  return exports.hash(exports.hash(data));
};

exports.randomBytes = (size = 32) => crypto.randomBytes(size).toString('hex');