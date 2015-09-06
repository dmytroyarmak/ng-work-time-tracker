(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .directive('flipClock', flipClockDirective);

  flipClockDirective.$inject = ['flipClockService'];
  function flipClockDirective(flipClockService) {
    return {
      link: function(scope, element, attrs) {
        flipClockService.setElement(element);
        element.bind('$destroy', function() {
          flipClockService.unsetElement();
        });
      }
    };
  }
}());
