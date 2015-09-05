(function(){
  'use strict';

  angular.module('workTimeTrackerApp')
    .filter('timeDuration', function() {
      return function(input) {
        var s = input % 60,
            m = Math.floor(input/60) % 60,
            h = Math.floor(input/(60*60));
        return  (h > 0 ? (h + 'h ') : '') + (m > 0 ? (m + 'm ') : '') + s + 's';
      };
  });
}());
