// src/consensus/forkHandler.js
module.exports = {
  chooseChain(local, remote) {
    return remote.length > local.length ? remote : local;
  },
};