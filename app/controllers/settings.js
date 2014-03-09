angular.module('workTimeTrackerApp').controller('SettingsCtrl', ['$scope', 'activities', function ($scope, activities) {
  $scope.activities = activities.getAll();

  $scope.availableCssClasses = ['default', 'primary', 'info', 'success', 'warning', 'danger'];

  $scope.removeActiviry = function(activity) {
    activities.remove(activity);
  };

  $scope.addNew = function() {
    activities.addNew('', 'default');
  };
}]);
