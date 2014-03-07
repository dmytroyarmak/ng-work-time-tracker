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
      flipClock = null;
      onInit = null;
    },
    restart: function(startTime) {
      if (flipClock) {
        flipClock.start();
        flipClock.setTime(startTime || 1);
      }
    },
    onInit: function(callback) {
      onInit = callback;
    }
  };
});

angular.module('workTimeTrackerApp').factory('activities', function() {
  var activities = [
    {name: 'Working', color: 'default'},
    {name: 'Eating', color: 'primary'},
    {name: 'Rest', color: 'info'},
    {name: 'Web surfing', color: 'success'},
    {name: 'Off-topic', color: 'warning'},
    {name: 'Consulting', color: 'danger'}
  ];

  return {
    getAll: function() {
      activities
        .filter(function(activity) { return !activity.name; })
        .forEach(this.remove);

      return activities;
    },

    remove: function(activity) {
      var index = activities.indexOf(activity);
      if (index > -1) {
          activities.splice(index, 1);
      }
    },

    addNew: function(activity) {
      activities.push(activity);
    }
  };
});
