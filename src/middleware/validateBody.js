// src/middleware/validateBody.js
module.exports = (schema) => (req, res, next) => {
  // very small validator
  for (const k of Object.keys(schema)) {
    if (schema[k].required && req.body[k] === undefined) return res.status(400).json({ error: `${k} required` });
  }
  next();
};