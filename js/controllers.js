angular.module('workTimeTrackerApp').controller('ActivityListCtrl', ['$scope', '$rootScope', 'flipClock', function ($scope, $rootScope, flipClock) {
    $scope.activities = [
      {name: 'Working', cssClass: 'default'},
      {name: 'Eating', cssClass: 'primary'},
      {name: 'Rest', cssClass: 'info'},
      {name: 'Web surfing', cssClass: 'success'},
      {name: 'Off-topic', cssClass: 'warning'},
      {name: 'Consulting', cssClass: 'danger'}
    ];

    $scope.setCurrentActivity = function(activity) {
      $rootScope.currentActivity = activity;
      flipClock.restart();
    };
}]);

angular.module('workTimeTrackerApp').controller('SettingsCtrl', ['$scope', function ($scope) {
}]);

angular.module('workTimeTrackerApp').controller('StatisticsCtrl', ['$scope', function ($scope) {
}]);

angular.module('workTimeTrackerApp').controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1);
    return page === currentRoute ? 'is-active' : '';
  };
}]);
