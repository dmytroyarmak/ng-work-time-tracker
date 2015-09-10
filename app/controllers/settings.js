(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .controller('SettingsCtrl', SettingsCtrl);

  SettingsCtrl.$inject = ['activitiesService'];
  function SettingsCtrl(activitiesService) {
    var vm = this;

    vm.activities = null;
    vm.availableColors = activitiesService.AVAILABLE_COLORS;
    vm.removeActiviry = removeActiviry;
    vm.addNewActivity = addNewActivity;

    activate();

    //////////

    function activate () {
      vm.activities = activitiesService.getAll();
    }

    function removeActiviry(activity) {
      activitiesService.remove(activity);
    }

    function addNewActivity () {
      activitiesService.addNew('', 'default');
    }
  }
}());
