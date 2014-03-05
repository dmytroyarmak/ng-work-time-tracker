angular.module('workTimeTrackerApp').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'ActivityListCtrl'
    })
    .when('/settings', {
      templateUrl: 'partials/settings.html',
      controller: 'SettingsCtrl'
    })
    .when('/statistics', {
      templateUrl: 'partials/statistics.html',
      controller: 'StatisticsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

