// src/config/env.js
module.exports = {
  development: {
    db: 'memory',
    mining: true,
    difficulty: 3,
  },
  production: {
    db: 'level',
    mining: false,
    difficulty: 5,
  },
}[process.env.NODE_ENV || 'development'];