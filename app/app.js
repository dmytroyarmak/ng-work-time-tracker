(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp', [
      'ui.bootstrap',
      'ngRoute',
      'ngAnimate'
    ])
    .config(workTimeTrackerAppConfig);

  workTimeTrackerAppConfig.$inject = ['$routeProvider'];
  function workTimeTrackerAppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/settings', {
        templateUrl: 'app/views/settings.html',
        controller: 'SettingsCtrl'
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
