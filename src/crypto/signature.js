// src/crypto/signature.js
const crypto = require('crypto');
exports.sign = (pkPem, data) => {
  const s = crypto.createSign('SHA256'); s.update(data); return s.sign(pkPem, 'hex');
};
exports.verify = (pubPem, data, sig) => { const v = crypto.createVerify('SHA256'); v.update(data); return v.verify(pubPem, sig, 'hex'); };