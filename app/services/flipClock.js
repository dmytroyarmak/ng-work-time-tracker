(function(){
  'use strict';

  angular.module('workTimeTrackerApp').factory('flipClock', function FlipClockFactory() {
    var flipClock = null,
        onInit = null;

    return {
      setElement: function(element) {
        flipClock = element.FlipClock({
          autoStart: false
        });
        if (onInit) {
          onInit();
          onInit = null;
        }
      },
      unsetElement: function() {
        flipClock.stop();
        flipClock = null;
        onInit = null;
      },
      restart: function(startTime) {
        if (flipClock) {
          flipClock.stop();
          flipClock.start();
          flipClock.setTime(startTime || 1);
        }
      },
      onInit: function(callback) {
        onInit = callback;
      }
    };
  });
}());
