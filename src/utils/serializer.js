// src/utils/serializer.js
exports.serialize = (obj) => JSON.stringify(obj);
exports.deserialize = (s) => JSON.parse(s);