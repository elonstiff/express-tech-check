// src/consensus/validatorSet.js
const validators = new Set();
module.exports = {
  add(v) { validators.add(v); },
  remove(v) { validators.delete(v); },
  list() { return Array.from(validators); },
};