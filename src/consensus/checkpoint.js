// src/consensus/checkpoint.js
const checkpoints = new Map();
module.exports = {
  add(height, hash) { checkpoints.set(height, hash); },
  verify(height, hash) { return !checkpoints.has(height) || checkpoints.get(height) === hash; },
};