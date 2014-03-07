angular.module('workTimeTrackerApp').controller('ActivityListCtrl', ['$scope', '$rootScope', 'flipClock', 'activities', function ($scope, $rootScope, flipClock, activities) {
  $scope.activities = activities.getAll();

  if ($rootScope.startedAt) {
    flipClock.onInit(function() {
      flipClock.restart(Math.round((new Date() - $rootScope.startedAt)/1000));
    });
  }

  $scope.setCurrentActivity = function(activity) {
    $rootScope.currentActivity = activity;
    $rootScope.startedAt = new Date();
    flipClock.restart();
  };
}]);

angular.module('workTimeTrackerApp').controller('SettingsCtrl', ['$scope', 'activities', function ($scope, activities) {
  $scope.activities = activities.getAll();

  $scope.availableCssClasses = ['default', 'primary', 'info', 'success', 'warning', 'danger'];

  $scope.removeActiviry = function(activity) {
    activities.remove(activity);
  };

  $scope.addNew = function() {
    activities.addNew({
      name: '',
      color: 'default'
    });
  };
}]);

angular.module('workTimeTrackerApp').controller('StatisticsCtrl', ['$scope', function ($scope) {
}]);

angular.module('workTimeTrackerApp').controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1);
    return page === currentRoute ? 'is-active' : '';
  };
}]);
