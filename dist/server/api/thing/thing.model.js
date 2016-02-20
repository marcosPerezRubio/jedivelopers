'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  phone: { type: String, trim: true, require: true },
  skills: [{
    name: String,
    level: Number
  }],
  active: Boolean
});

exports['default'] = mongoose.model('Thing', ThingSchema);
module.exports = exports['default'];
//# sourceMappingURL=thing.model.js.map
