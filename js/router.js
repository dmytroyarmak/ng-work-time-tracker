angular.module('workTimeTrackerApp').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'ActivityListCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

