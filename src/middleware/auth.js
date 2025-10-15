// src/middleware/auth.js
module.exports = (req, res, next) => {
  // simple token check (dev)
  const token = req.headers['x-api-key'] || req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'unauthorized' });
  next();
};