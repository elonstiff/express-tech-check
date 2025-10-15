// src/middleware/cors.js
module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-API-KEY');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
};