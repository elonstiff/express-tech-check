// src/utils/validator.js
exports.isAddress = (s) => typeof s === 'string' && s.length > 10;
exports.isAmount = (n) => typeof n === 'number' && n > 0;