'use strict';

angular.module('dashboardAppApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.events = [];

    $http.get('/api/events').success(function(events) {
      $scope.events = events;
      socket.syncUpdates('event', $scope.events);
    });

    $scope.addEvent = function() {
      if($scope.newEvent === '') {
        return;
      }
      $http.post('/api/events', { name: $scope.newEvent });
      $scope.newEvent = '';
    };

    $scope.deleteEvent = function(event) {
      $http.delete('/api/events/' + event._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('event');
    });
  });
