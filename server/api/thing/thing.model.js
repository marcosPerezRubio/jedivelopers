'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
  name: {type: String, trim:true, required:true},
  email: {type: String ,trim: true, required:true},
  phone: {type:String , trim:true, require:true},
  skills: [{
    name: String,
    level: Number
  }],
  active: Boolean
});

export default mongoose.model('Thing', ThingSchema);
