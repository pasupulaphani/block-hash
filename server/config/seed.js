/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Event = require('../api/event/event.model');
var User = require('../api/user/user.model');

// Thing.find({}).remove(function() {
//   Thing.create({
//     name : 'KRISTIBETTAGAMMA',
//     info : 'info'
//   }, {
//     name : 'JOHANNLUNNDROMMAT',
//     info : 'info'
//   }, {
//     name : "LANDN' MMMAYT",
//     info : 'info'
//   }, {
//     name : '+AUTOMATA',
//     info : 'info'
//   }, {
//     name : 'BAD BOT',
//     info : 'info'
//   }, {
//     name : 'BEACON DONATE',
//     info : 'info'
//   }, {
//     name : 'BLINDSPOT',
//     info : 'info'
//   }, {
//     name : 'CARBON WINGS',
//     info : 'info'
//   }, {
//     name : 'CHARITY SHARE',
//     info : 'info'
//   }, {
//     name : 'DISASTURVEY',
//     info : 'info'
//   }, {
//     name : 'EAAS (EMERGENCY AS A SERVICE)',
//     info : 'info'
//   }, {
//     name : 'ESPRESSA',
//     info : 'info'
//   }, {
//     name : 'FAVO',
//     info : 'info'
//   }, {
//     name : 'GRADEUP',
//     info : 'info'
//   }, {
//     name : 'IM HOME SAVE',
//     info : 'info'
//   }, {
//     name : 'LARGE FOR LITTLE',
//     info : 'info'
//   }, {
//     name : 'IM HOME SAVE',
//     info : 'info'
//   }, {
//     name : 'PIZZASTEVE">',
//     info : 'info'
//   }, {
//     name : 'QUEUESWAP',
//     info : 'info'
//   }, {
//     name : 'QUOLLABORATE',
//     info : 'info'
//   }, {
//     name : 'SUPER',
//     info : 'info'
//   }, {
//     name : 'TEAM STREAM',
//     info : 'info'
//   }, {
//     name : 'TOP DECK',
//     info : 'info'
//   }, {
//     name : 'TRAVEL CHECK',
//     info : 'info'
//   }, {
//     name : 'TUBBY',
//     info : 'info'
//   });
// });


// Event.find({}).remove(function() {
//   Event.create({
//     name : 'event1',
//     info : 'info event1'
//   }, {
//     name : 'event2',
//     info : 'info event2'
//   }, {
//     name : 'event3',
//     info : 'info event3'
//   });
// });

// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     name: 'Test User',
//     email: 'test@test.com',
//     password: 'test'
//   }, {
//     provider: 'local',
//     role: 'admin',
//     name: 'Admin',
//     email: 'admin@admin.com',
//     password: 'admin'
//   }, function() {
//       console.log('finished populating users');
//     }
//   );
// });