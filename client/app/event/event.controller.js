'use strict';

angular.module('dashboardAppApp')
  .controller('EventCtrl', function ($scope, $http, $routeParams, $location, $log, socket, $window) {
    $scope.event = {};

    var _id = $routeParams._id;

    if ($location.path() == '/event/new' || $location.path() == '/event/new/') {
      $scope.to_create = true;
    } else {
      $http.get('/api/events/' + _id).success(function(event) {
        $scope.event = event;
        socket.syncUpdates('event', $scope.event);
      });
    }

    $scope.addEvent = function() {
      console.warn($scope.event)
      $http.post('/api/events', $scope.event );
    };

    $scope.updateEvent = function() {
      $http.put('/api/events/' + _id, $scope.event );
    };

    $scope.deleteEvent = function(event) {
      $http.delete('/api/events/' + event._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('event');
    });

//////////

  $scope.mytime = 'Sun Apr 25 2015 13:00:00 GMT+0100 (BST)' || new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = $scope.event.startTime || new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.mytime);
    $scope.event.startTime = $scope.mytime;
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };

  $scope.mytime1 = 'Sun Apr 25 2015 13:00:00 GMT+0100 (BST)' || new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime1 = d;
  };

  $scope.changed1 = function () {
    $log.log('Time changed to: ' + $scope.mytime1);
  };

  $scope.clear = function() {
    $scope.mytime1 = null;
  };

  $scope.get_venue_map = function () {

    var center = $scope.locationLat + ',' + $scope.locationLng
    var center = '51.5084796,-0.059135200000014265'
    var width = data.width
    var height = 120
    var zoom = 17
    var color = "red"
    var icon = encodeURI("/assets/images/location_marker.png")

    var url = "http://maps.googleapis.com/maps/api/staticmap?maptype=roadmap"
    url += "&center=" + center
    url += "&zoom=" + zoom
    url += "&ize=" + (width * height)
    url += "&markers=" + icon + '%7C#' + center
    return url
  }

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
