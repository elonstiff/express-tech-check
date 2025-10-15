// src/utils/hex.js
exports.toHex = (buf) => Buffer.from(buf).toString('hex');
exports.fromHex = (hex) => Buffer.from(hex, 'hex');