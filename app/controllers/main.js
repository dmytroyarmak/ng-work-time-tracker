(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .controller('MainCtrl', MainCtrl);

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
