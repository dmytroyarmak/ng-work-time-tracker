(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .controller('StatisticsCtrl', StatisticsCtrl);

  StatisticsCtrl.$inject = ['$scope', 'activitiesService'];
  function StatisticsCtrl($scope, activitiesService) {
    $scope.activities = activitiesService.getAll();
    $scope.today = new Date();
  }
}());
