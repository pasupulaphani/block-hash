'use strict';

angular.module('dashboardAppApp')
  .controller('EventCtrl', function ($scope, $http, $routeParams, $location, socket) {
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
      $http.patch('/api/events/' + _id, $scope.event );
    };

    $scope.deleteEvent = function(event) {
      $http.delete('/api/events/' + event._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('event');
    });
  });
