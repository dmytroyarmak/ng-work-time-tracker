angular.module('workTimeTrackerApp')
  .filter('timeDuration', function() {
    return function(input) {
      var h = Math.floor(input/60),
          m = input % 60;
      return  (h > 0 ? (h + 'h ') : '') + m + 'm';
    };
});
