(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp', [
      'ui.bootstrap',
      'dyFlipClock',
      'ngRoute',
      'ngAnimate'
    ])
    .config(workTimeTrackerAppConfig)
    .run(workTimeTrackerAppRun);

  workTimeTrackerAppConfig.$inject = ['$routeProvider'];
  function workTimeTrackerAppConfig($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }

  workTimeTrackerAppRun.$inject = ['activitiesService'];
  function workTimeTrackerAppRun (activitiesService) {
    activitiesService.addNew('Working', 'default');
    activitiesService.addNew('Eating', 'primary');
    activitiesService.addNew('Rest', 'info');
    activitiesService.addNew('Web surfing', 'success');
    activitiesService.addNew('Off-topic', 'warning');
    activitiesService.addNew('Consulting', 'danger');
  }
}());
