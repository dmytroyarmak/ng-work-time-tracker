(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .factory('activitiesService', activitiesService);

  activitiesService.$inject = ['$interval'];
  function activitiesService($interval) {
    var activities = [],
        intervalPromise,
        currentActivity;

    activities.getSumOfDurations = function() {
      return this.reduce(function(mem, act) {
        return mem + act.duration;
      }, 0);
    };

    var Activity = function(name, color, duration) {
      this.name = name;
      this.color = color;
      this.duration = 0;
    };

    Activity.prototype.getDurationInPct = function() {
      return (this.duration / activities.getSumOfDurations()) * 100;
    };

    activities.push(new Activity('Working',     'default',  60*350));
    activities.push(new Activity('Eating',      'primary',  60*40 ));
    activities.push(new Activity('Rest',        'info',     60*50 ));
    activities.push(new Activity('Web surfing', 'success',  60*100));
    activities.push(new Activity('Off-topic',   'warning',  60*45 ));
    activities.push(new Activity('Consulting',  'danger',   60*140));

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
      },

      setActive: function(activity) {
        currentActivity = activity;

        if (intervalPromise) {
          $interval.cancel(intervalPromise);
          intervalPromise = null;
        }

        intervalPromise = $interval(function() {
          activity.duration += 1;
        }, 1000);
      },

      getActive: function() {
        return currentActivity;
      }
    };
  }
}());
