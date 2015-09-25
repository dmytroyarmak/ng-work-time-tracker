(function(){
  'use strict';

  angular
    .module('workTimeTrackerApp')
    .factory('activitiesService', activitiesService);

  activitiesService.$inject = ['$rootScope', '$interval'];
  function activitiesService($rootScope, $interval) {
    var AVAILABLE_COLORS = ['default', 'primary', 'info', 'success', 'warning', 'danger'];
    var activities = [];
    var currentActivity;

    activities.getSumOfDurations = function() {
      return this.reduce(function(mem, act) {
        return mem + act.getDuration();
      }, 0);
    };

    var Activity = function(name, color, initialTime) {
      this.name = name;
      this.color = color;
      this._timer = new Tock({
        interval: 1000,
        callback: _applyRootScope
      });
      this._timer.start_time = initialTime || 0;
      this._timer.pause_time = this._timer.start_time;
    };

    Activity.prototype.getDurationInPct = function() {
      return (this.getDuration() / activities.getSumOfDurations()) * 100;
    };

    Activity.prototype.start = function() {
      if (!this._timer.go) {
        if (this._timer.pause_time) {
          this._timer.pause();
        } else {
          this._timer.start();
        }
      }
    };

    Activity.prototype.stop = function() {
      if (this._timer.go) {
        this._timer.pause();
      }
    };

    Activity.prototype.getDuration = function() {
      return this._timer.lap();
    };

    activities.push(new Activity('Working', 'default'));
    activities.push(new Activity('Eating', 'primary'));
    activities.push(new Activity('Rest', 'info'));
    activities.push(new Activity('Web surfing', 'success'));
    activities.push(new Activity('Off-topic', 'warning'));
    activities.push(new Activity('Consulting', 'danger'));

    function _applyRootScope () {
      if ($rootScope.$$phase !=='$apply' && $rootScope.$$phase !=='$digest') {
        $rootScope.$apply();
      }
    }

    return {
      AVAILABLE_COLORS: AVAILABLE_COLORS,

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
