// src/middleware/rateLimit.js
const store = new Map();

module.exports = (limit = 1000) => (req, res, next) => {
  const key = req.ip;
  const cnt = store.get(key) || 0;
  store.set(key, cnt + 1);
  if (cnt > limit) return res.status(429).json({ error: 'rate limit' });
  next();
};