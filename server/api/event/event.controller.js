/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /Events              ->  index
 * POST    /Events              ->  create
 * GET     /Events/:id          ->  show
 * PUT     /Events/:id          ->  update
 * DELETE  /Events/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Event = require('./event.model');

// Get list of Events
exports.index = function(req, res) {
  Event.find(function (err, Events) {
    if(err) { return handleError(res, err); }
    return res.json(200, Events);
  });
};

// Get a single Event
exports.show = function(req, res) {
  Event.findById(req.params.id, function (err, Event) {
    if(err) { return handleError(res, err); }
    if(!Event) { return res.send(404); }
    return res.json(Event);
  });
};

// Creates a new Event in the DB.
exports.create = function(req, res) {
  Event.create(req.body, function(err, Event) {
    if(err) { return handleError(res, err); }
    return res.json(201, Event);
  });
};

// Updates an existing Event in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Event.findById(req.params.id, function (err, Event) {
    if (err) { return handleError(res, err); }
    if(!Event) { return res.send(404); }
    var updated = _.merge(Event, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Event);
    });
  });
};

// Deletes a Event from the DB.
exports.destroy = function(req, res) {
  Event.findById(req.params.id, function (err, Event) {
    if(err) { return handleError(res, err); }
    if(!Event) { return res.send(404); }
    Event.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}