// src/crypto/ecc.js
const crypto = require('crypto');

exports.generateKeypair = () => crypto.generateKeyPairSync('ec', { namedCurve: 'secp256k1' });
exports.sign = (privateKeyPem, data) => {
  const sign = crypto.createSign('SHA256');
  sign.update(data);
  return sign.sign(privateKeyPem, 'hex');
};
exports.verify = (publicKeyPem, data, sigHex) => {
  const verify = crypto.createVerify('SHA256');
  verify.update(data);
  return verify.verify(publicKeyPem, Buffer.from(sigHex, 'hex'));
};