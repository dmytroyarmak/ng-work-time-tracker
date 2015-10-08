(function(){
  'use strict';

  angular
    .module('workTimeTracker', [
      'ui.bootstrap',
      'dyFlipClock',
      'ngRoute',
      'ngAnimate',

      'workTimeTracker.components.main',
      'workTimeTracker.components.settings',
      'workTimeTracker.components.statistics',
      'workTimeTracker.directives.navigation'
    ])
    .config(workTimeTrackerConfig)
    .run(workTimeTrackerRun);

  workTimeTrackerConfig.$inject = ['$routeProvider'];
  function workTimeTrackerConfig($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }

  workTimeTrackerRun.$inject = ['activitiesService'];
  function workTimeTrackerRun (activitiesService) {
    activitiesService.addNew('Working', 'default');
    activitiesService.addNew('Eating', 'primary');
    activitiesService.addNew('Rest', 'info');
    activitiesService.addNew('Web surfing', 'success');
    activitiesService.addNew('Off-topic', 'warning');
    activitiesService.addNew('Consulting', 'danger');
  }
}());
