'use strict';

angular.module('dashboardAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/event/new', {
        templateUrl: 'app/event/event.html',
        controller: 'EventCtrl'
      })
      .when('/event/:_id/edit', {
        templateUrl: 'app/event/event.html',
        controller: 'EventCtrl'
      })
      .when('/event/:_id', {
        templateUrl: 'app/event/event.html',
        controller: 'EventCtrl'
      });
  });