(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'activitiesService'];
  function MainCtrl($scope, activitiesService) {
    $scope.activities = activitiesService.getAll();
    $scope.getActive = activitiesService.getActive;
    $scope.setActive = activitiesService.setActive;
  }
}());
