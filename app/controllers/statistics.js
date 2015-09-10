(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .controller('StatisticsCtrl', StatisticsCtrl);

  StatisticsCtrl.$inject = ['activitiesService'];
  function StatisticsCtrl(activitiesService) {
    var vm = this;

    vm.activities = null;
    vm.today = null;

    activate();

    //////////

    function activate () {
      vm.activities = activitiesService.getAll();
      vm.today = new Date();
    }
  }
}());
