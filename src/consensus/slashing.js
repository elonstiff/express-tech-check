// src/consensus/slashing.js
module.exports = {
  slash(validator, reason) {
    // placeholder: mark validator as slashed
    return { validator, reason, ts: Date.now() };
  },
};