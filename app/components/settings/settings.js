(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .controller('SettingsCtrl', SettingsCtrl)
    .config(settingsRouteConfig);

  settingsRouteConfig.$inject = ['$routeProvider'];
  function settingsRouteConfig($routeProvider) {
    $routeProvider
      .when('/settings', {
        templateUrl: 'app/components/settings/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'vm'
      });
  }

  SettingsCtrl.$inject = ['activitiesService', 'Activity'];
  function SettingsCtrl(activitiesService, Activity) {
    var vm = this;

    vm.activities = null;
    vm.availableColors = Activity.AVAILABLE_COLORS;
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
