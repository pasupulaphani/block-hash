'use strict';

angular.module('dashboardAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/event/:id/paticipants', {
        templateUrl: 'app/participant/participant.html',
        controller: 'ParticipantCtrl'
      });
  });