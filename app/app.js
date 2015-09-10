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
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/settings', {
        templateUrl: 'app/views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'vm'
      })
      .when('/statistics', {
        templateUrl: 'app/views/statistics.html',
        controller: 'StatisticsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
}());
