var workTimeTrackerApp = angular.module('workTimeTrackerApp', []);

workTimeTrackerApp.controller('ActivityListCtrl', function ($scope) {
  $scope.activities = [
    {name: 'Working'},
    {name: 'Eating'},
    {name: 'Rest'},
    {name: 'Web surfing'},
    {name: 'Off-topic'},
    {name: 'Consulting'}
  ];

  $scope.setCurrentActivity = function(activity) {
    $scope.currentActivity = activity;
  };
});
