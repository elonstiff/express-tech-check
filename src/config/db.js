// src/config/db.js
const fs = require('fs');
const path = require('path');

module.exports = {
  ensureDataDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  },
  readJSON(file) {
    try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { return null; }
  },
  writeJSON(file, obj) {
    fs.writeFileSync(file, JSON.stringify(obj, null, 2), 'utf8');
  },
};