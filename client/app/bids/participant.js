'use strict';

angular.module('dashboardAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/event/:id/sponsors', {
        templateUrl: 'app/bids/bids.html',
        controller: 'BidsCtrl'
      });
  });