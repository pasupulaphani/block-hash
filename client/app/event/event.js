'use strict';

angular.module('dashboardAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/event/:_id', {
        templateUrl: 'app/event/event.html',
        controller: 'EventCtrl'
      });
  });