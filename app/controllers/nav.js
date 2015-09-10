(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .controller('NavCtrl', NavCtrl);

  NavCtrl.$inject = ['$location'];
  function NavCtrl($location) {
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
