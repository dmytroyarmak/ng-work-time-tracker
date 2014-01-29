angular.module('workTimeTrackerApp').factory('flipClock', function FlipClockFactory() {
  var flipClock;

  return {
    setElement: function(element) {
      flipClock = element.FlipClock({
        autoStart: false
      });
    },
    restart: function() {
      if (flipClock) {
        flipClock.setTime(1);
        flipClock.start();
      }
    }
  };
});
