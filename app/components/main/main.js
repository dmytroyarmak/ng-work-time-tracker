(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .controller('MainCtrl', MainCtrl)
    .config(mainRouteConfig);

  mainRouteConfig.$inject = ['$routeProvider'];
  function mainRouteConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      });
  }

  MainCtrl.$inject = ['activitiesService'];
  function MainCtrl(activitiesService) {
    var vm = this;

    vm.activities = null;
    vm.setActive = activitiesService.setActive;
    vm.isActive = isActive;
    vm.hasActive = hasActive;
    vm.getDurationOfActiveActivity = getDurationOfActiveActivity;

    activate();

    //////////

    function activate () {
      vm.activities = activitiesService.getAll();
    }

    function isActive (activity) {
      return activitiesService.getActive() === activity;
    }

    function hasActive () {
      return !!activitiesService.getActive();
    }

    function getDurationOfActiveActivity () {
      return activitiesService.getActive().duration * 1000;
    }
  }
}());
