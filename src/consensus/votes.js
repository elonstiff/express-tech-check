// src/consensus/votes.js
const votes = new Map();
module.exports = {
  vote(candidate, validator) {
    votes.set(candidate, (votes.get(candidate) || new Set()).add(validator));
  },
  tally(candidate) { return (votes.get(candidate) || new Set()).size; },
};