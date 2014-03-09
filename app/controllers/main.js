angular.module('workTimeTrackerApp').controller('MainCtrl', ['$scope', '$rootScope', 'flipClock', 'activities', function ($scope, $rootScope, flipClock, activities) {
  $scope.activities = activities.getAll();

  if ($rootScope.startedAt) {
    flipClock.onInit(function() {
      flipClock.restart(Math.round((new Date() - $rootScope.startedAt)/1000));
    });
  }

  $scope.setCurrentActivity = function(activity) {
    $rootScope.startedAt = new Date();
    activities.setActive(activity);
  };
}]);
