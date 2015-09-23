(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp', [
      'ui.bootstrap',
      'dyFlipClock',
      'ngRoute',
      'ngAnimate'
    ])
    .config(workTimeTrackerAppConfig);

  workTimeTrackerAppConfig.$inject = ['$routeProvider'];
  function workTimeTrackerAppConfig($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }
}());
