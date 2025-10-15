// src/utils/bigInt.js
// small wrapper using BigInt
exports.toBig = (n) => BigInt(Math.floor(n));
exports.add = (a, b) => (BigInt(a) + BigInt(b)).toString();