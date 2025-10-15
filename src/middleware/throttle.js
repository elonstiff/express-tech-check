// src/middleware/throttle.js
let tokens = 100;
setInterval(() => { tokens = Math.min(100, tokens + 1); }, 1000);
module.exports = (req, res, next) => {
  if (tokens <= 0) return res.status(503).json({ error: 'throttled' });
  tokens--;
  next();
};