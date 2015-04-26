'use strict';

angular.module('dashboardAppApp')
  .controller('ParticipantCtrl', function ($scope, $http, socket) {
    $scope.things = [];

    $http.get('/api/things').success(function(things) {
      $scope.things = things;
      socket.syncUpdates('thing', $scope.things);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
