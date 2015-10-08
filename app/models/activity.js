(function(){
  'use strict';

  angular
    .module('workTimeTracker.models.activity', [])
    .factory('Activity', activityFactory);

  activityFactory.$inject = ['$rootScope'];
  function activityFactory($rootScope) {
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

    Activity.AVAILABLE_COLORS = ['default', 'primary', 'info', 'success', 'warning', 'danger'];

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

    function _applyRootScope () {
      if ($rootScope.$$phase !=='$apply' && $rootScope.$$phase !=='$digest') {
        $rootScope.$apply();
      }
    }

    return Activity;
  }
}());
