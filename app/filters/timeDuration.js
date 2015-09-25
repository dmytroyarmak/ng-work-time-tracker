(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .filter('timeDuration', timeDurationFilter);

  timeDurationFilter.$inject = [];
  function timeDurationFilter() {
    return function(input) {
      var s = Math.floor(input/1000) % 60,
          m = Math.floor(input/(60*1000)) % 60,
          h = Math.floor(input/(60*60*1000));
      return  (h > 0 ? (h + 'h ') : '') + (m > 0 ? (m + 'm ') : '') + s + 's';
    };
  }
}());
