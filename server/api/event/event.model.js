'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: String,
  info: String,
  desc: String,
  startTime: Date,
  endTime: Date,
  address: String,
  locationLat: String,
  locationLng: String,
  active: Boolean,
  createdBy: String,
  createdAt: { type : Date, default: Date.now }
});

module.exports = mongoose.model('Event', EventSchema);