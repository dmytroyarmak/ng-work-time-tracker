angular.module('workTimeTrackerApp').factory('activities', function() {
  var activities = [];

  activities.getSumOfDurations = function() {
    return this.reduce(function(mem, act) {
      return mem + act.duration;
    }, 0);
  };

  var Activity = function(name, color, duration) {
    this.name = name;
    this.color = color;
    this.duration = duration || 0;
  };

  Activity.prototype.getDurationInPct = function() {
    return (this.duration / activities.getSumOfDurations()) * 100;
  };

  activities.push(new Activity('Working',     'default',  450));
  activities.push(new Activity('Eating',      'primary',  50 ));
  activities.push(new Activity('Rest',        'info',     45 ));
  activities.push(new Activity('Web surfing', 'success',  100));
  activities.push(new Activity('Off-topic',   'warning',  30 ));
  activities.push(new Activity('Consulting',  'danger',   120));

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

    addNew: function(name, color) {
      activities.push(new Activity(name, color));
    }
  };
});
