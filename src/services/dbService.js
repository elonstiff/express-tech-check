// src/services/dbService.js
const fs = require('fs');
const path = require('path');
const cfg = require('../config');
const db = {};

module.exports = {
  save(name, obj) {
    const dir = cfg.dataDir;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${name}.json`), JSON.stringify(obj, null, 2));
  },
  load(name) {
    const p = path.join(cfg.dataDir, `${name}.json`);
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  },
};