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

angular.module('workTimeTrackerApp').factory('activities', function() {
  var activities = [
    {name: 'Working', cssClass: 'default'},
    {name: 'Eating', cssClass: 'primary'},
    {name: 'Rest', cssClass: 'info'},
    {name: 'Web surfing', cssClass: 'success'},
    {name: 'Off-topic', cssClass: 'warning'},
    {name: 'Consulting', cssClass: 'danger'}
  ];

  return {
    getAll: function() {
      return activities;
    }
  };
});
