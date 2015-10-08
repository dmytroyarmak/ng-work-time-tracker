(function(){
  'use strict';

  angular
    .module('workTimeTracker.services.activities', [])
    .factory('activitiesService', activitiesService);

  activitiesService.$inject = ['$rootScope', '$interval', 'Activity'];
  function activitiesService($rootScope, $interval, Activity) {
    var activities = [];
    var currentActivity;

    activities.getSumOfDurations = function() {
      return this.reduce(function(mem, act) {
        return mem + act.getDuration();
      }, 0);
    };

    activities.getDurationInPct = function(activity) {
      return (activity.getDuration() / this.getSumOfDurations()) * 100;
    };

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
        if (activity !== currentActivity) {
          if (currentActivity) {
            currentActivity.stop();
          }
          activity.start();
          currentActivity = activity;
          $rootScope.currentActivity = activity;
        }
      },

      getActive: function() {
        return currentActivity;
      }
    };
  }
}());
