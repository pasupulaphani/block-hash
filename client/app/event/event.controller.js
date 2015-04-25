'use strict';

angular.module('dashboardAppApp')
  .controller('EventCtrl', function ($scope, $http, $routeParams, socket) {
    $scope.event = {};

    var _id = $routeParams._id;

    $http.get('/api/events/' + _id).success(function(event) {
      $scope.event = event;
      socket.syncUpdates('event', $scope.event);
    });

    $scope.addEvent = function() {
      // if($scope.newEvent === '') {
      //   return;
      // }
      $http.post('/api/events', { name: $scope.newEvent });
      // $scope.newEvent = '';
    };

    $scope.updateEvent = function(event) {
      $http.put('/api/events/' + event._id);
    };

    $scope.deleteEvent = function(event) {
      $http.delete('/api/events/' + event._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('event');
    });
  });
