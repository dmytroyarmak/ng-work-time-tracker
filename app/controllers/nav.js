(function(){
  'use strict';

  angular.module('workTimeTrackerApp').controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1);
      return page === currentRoute ? 'is-active' : '';
    };
  }]);
}());
