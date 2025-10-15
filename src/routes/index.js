// src/routes/index.js
// const express = require('express');
// const router = express.Router();

// router.use('/blocks', require('./blocks'));
// router.use('/tx', require('./transactions'));
// router.use('/wallets', require('./wallets'));
// router.use('/peers', require('./peers'));
// router.use('/mining', require('./mining'));
// router.use('/chain', require('./chain'));
// router.use('/auth', require('./auth'));
// router.use('/explorer', require('./explorer'));
// router.use('/node', require('./node'));
// router.get('/', (req, res) => res.json({ name: 'SimpleChain API' }));

// module.exports = router;

export default function init() {
  console.log("routes init...");
}
