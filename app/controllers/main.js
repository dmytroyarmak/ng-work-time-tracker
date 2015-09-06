(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$rootScope', 'flipClockService', 'activitiesService'];
  function MainCtrl($scope, $rootScope, flipClockService, activitiesService) {
    $scope.activities = activitiesService.getAll();

    if ($rootScope.startedAt) {
      flipClockService.onInit(function() {
        flipClockService.restart(Math.round((new Date() - $rootScope.startedAt)/1000));
      });
    }

    $scope.setCurrentActivity = function(activity) {
      $rootScope.startedAt = new Date();
      activitiesService.setActive(activity);
    };
  }
}());
