(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .directive('navigation', navigationDirective)
    .controller('NavigationCtrl', NavigationCtrl);

  navigationDirective.$inject = [];
  function navigationDirective () {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/navigation/navigation.html',
      controller: 'NavigationCtrl',
      controllerAs: 'vm'
    };
  }

  NavigationCtrl.$inject = ['$location'];
  function NavigationCtrl($location) {
    var ACTIVE_PAGE_CLASS = 'is-active';
    var vm = this;

    vm.getPageClass = getPageClass;

    //////////

    function getPageClass(page) {
      var currentRoute = $location.path().substring(1);
      return page === currentRoute ? ACTIVE_PAGE_CLASS : '';
    }
  }
}());
