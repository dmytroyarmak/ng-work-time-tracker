(function(){
  'use strict';

  angular.module('workTimeTrackerApp').controller('StatisticsCtrl', ['$scope', 'activities', function ($scope, activities) {
    $scope.activities = activities.getAll();
    $scope.today = new Date();
  }]);
}());
