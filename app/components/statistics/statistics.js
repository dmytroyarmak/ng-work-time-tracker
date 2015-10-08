(function(){
  'use strict';

  angular
    .module('workTimeTracker.components.statistics', [
      'workTimeTracker.services.activities',
      'workTimeTracker.filters.timeDuration'
    ])
    .controller('StatisticsCtrl', StatisticsCtrl)
    .config(statisticsRouteConfig);

  statisticsRouteConfig.$inject = ['$routeProvider'];
  function statisticsRouteConfig($routeProvider) {
    $routeProvider
      .when('/statistics', {
        templateUrl: 'app/components/statistics/statistics.html',
        controller: 'StatisticsCtrl',
        controllerAs: 'vm'
      });
  }

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
