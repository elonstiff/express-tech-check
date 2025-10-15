// src/utils/persistence.js
const fs = require('fs');
const path = require('path');
module.exports = {
  save(file, obj) { fs.writeFileSync(path.resolve(file), JSON.stringify(obj, null, 2)); },
  load(file) {
    try { return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8')); } catch (e) { return null; }
  },
};