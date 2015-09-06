(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .controller('SettingsCtrl', SettingsCtrl);

  SettingsCtrl.$inject = ['$scope', 'activitiesService'];
  function SettingsCtrl($scope, activitiesService) {
    $scope.activities = activitiesService.getAll();

    $scope.availableCssClasses = ['default', 'primary', 'info', 'success', 'warning', 'danger'];

    $scope.removeActiviry = function(activity) {
      activitiesService.remove(activity);
    };

    $scope.addNew = function() {
      activitiesService.addNew('', 'default');
    };
  }
}());
