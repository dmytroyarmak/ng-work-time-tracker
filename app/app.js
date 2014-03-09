angular.module('workTimeTrackerApp', ['ui.bootstrap', 'ngRoute', 'ngAnimate']).config(['$routeProvider', function($routeProvider) {
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
}]);
