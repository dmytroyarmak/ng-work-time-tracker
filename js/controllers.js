var workTimeTrackerApp = angular.module('workTimeTrackerApp', []);

workTimeTrackerApp.controller('ActivityListCtrl', function ($scope, $rootScope) {
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
  };
});
