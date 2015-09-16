(function() {
'use strict';
angular.module('dyFlipClock', [
  'dyFlipClock.dyFlipClockDirective',
  'dyFlipClock.dyFlipClockNumberDirective',
  'dyFlipClock.dyFlipClockLabelDirective'
]);

angular.module('dyFlipClock.dyFlipClockDirective', [
    'dyFlipClock.dyFlipClockNumberDirective',
    'dyFlipClock.dyFlipClockLabelDirective'
  ])
  .directive('dyFlipClock', dyFlipClockDirective)
  .controller('DyFlipClockController', DyFlipClockController);

dyFlipClockDirective.$inject = [];
function dyFlipClockDirective() {
  return {
    restrict: 'EA',
    scope: {
      time: '@'
    },
    bindToController: true,
    controller: 'DyFlipClockController',
    controllerAs: 'vm',
    templateUrl: 'src/js/angular-flip-clock-directive/angular-flip-clock-directive.html'
  };
}

DyFlipClockController.$inject = ['$interval'];
function DyFlipClockController($interval) {
  var MILISECONDS_IN_SECOND = 1000;
  var MILISECONDS_IN_MINUTE = MILISECONDS_IN_SECOND * 60;
  var MILISECONDS_IN_HOUR = MILISECONDS_IN_MINUTE * 60;
  var MILISECONDS_IN_24_HOURS = MILISECONDS_IN_HOUR * 24;

  var vm = this;

  vm.time = 0;

  vm.getHoursTensPlace = getHoursTensPlace;
  vm.getHoursOnesPlace = getHoursOnesPlace;
  vm.getMinutesTensPlace = getMinutesTensPlace;
  vm.getMinutesOnesPlace = getMinutesOnesPlace;
  vm.getSecondsTensPlace = getSecondsTensPlace;
  vm.getSecondsOnesPlace = getSecondsOnesPlace;

  //////////

  function getHoursTensPlace() {
    return _getTensPlace(_getHours(_getTimeAsNumber()));
  }

  function getHoursOnesPlace() {
    return _getOnesPlace(_getHours(_getTimeAsNumber()));
  }

  function getMinutesTensPlace() {
    return _getTensPlace(_getMinutes(_getTimeAsNumber()));
  }

  function getMinutesOnesPlace() {
    return _getOnesPlace(_getMinutes(_getTimeAsNumber()));
  }

  function getSecondsTensPlace() {
    return _getTensPlace(_getSeconds(_getTimeAsNumber()));
  }

  function getSecondsOnesPlace() {
    return _getOnesPlace(_getSeconds(_getTimeAsNumber()));
  }

  function _getHours(time) {
    return Math.floor((time % MILISECONDS_IN_24_HOURS - _getMinutes(time)) / MILISECONDS_IN_HOUR);
  }

  function _getMinutes(time) {
    return Math.floor((time % MILISECONDS_IN_HOUR - _getSeconds(time)) / MILISECONDS_IN_MINUTE);
  }

  function _getSeconds(time) {
    return Math.floor((time % MILISECONDS_IN_MINUTE - _getMiliseconds(time)) / MILISECONDS_IN_SECOND);
  }

  function _getMiliseconds(time) {
    return Math.floor(time % MILISECONDS_IN_SECOND);
  }

  function _getTensPlace(number) {
    return (number % 100 - _getOnesPlace(number)) / 10;
  }

  function _getOnesPlace(number) {
    return number % 10;
  }

  function _getTimeAsNumber() {
    var timeAsNumber = window.parseInt(vm.time, 10);
    var isTimeNaN = (timeAsNumber !== timeAsNumber);
    return isTimeNaN ? 0 : timeAsNumber;
  }
}

angular.module('dyFlipClock.dyFlipClockLabelDirective', [])
  .directive('dyFlipClockLabel', dyFlipClockLabelDirective)
  .controller('DyFlipClockLabelController', DyFlipClockLabelController);

dyFlipClockLabelDirective.$inject = [];
function dyFlipClockLabelDirective() {
  return {
    restrict: 'EA',
    scope: {
      text: '@',
      hideDivider: '='
    },
    bindToController: true,
    controller: 'DyFlipClockLabelController',
    controllerAs: 'vm',
    templateUrl: 'src/js/angular-flip-clock-label-directive/angular-flip-clock-label-directive.html'
  };
}

DyFlipClockLabelController.$inject = [];
function DyFlipClockLabelController() {
}

angular.module('dyFlipClock.dyFlipClockNumberDirective', [])
  .directive('dyFlipClockNumber', dyFlipClockNumberDirective)
  .controller('DyFlipClockNumberController', DyFlipClockNumberController);

dyFlipClockNumberDirective.$inject = [];
function dyFlipClockNumberDirective() {
  return {
    restrict: 'EA',
    scope: {},
    bindToController: true,
    controllerAs: 'vm',
    controller: 'DyFlipClockNumberController',
    templateUrl: 'src/js/angular-flip-clock-number-directive/angular-flip-clock-number-directive.html'
  };
}

DyFlipClockNumberController.$inject = ['$scope', '$parse', '$attrs'];
function DyFlipClockNumberController($scope, $parse, $attrs) {
  var vm = this;

  vm.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  vm.currentValue = 0;
  vm.previousValue = 0;

  vm.isActive = isActive;
  vm.isBefore = isBefore;
  vm.isAnimated = isAnimated;

  activate();

  //////////

  function activate() {
    $scope.$watch(function getValueFromParentScope() {
      return $parse($attrs.value)($scope.$parent);
    }, function onValueChanged(newValue, oldValue) {
      vm.currentValue = newValue;
      vm.previousValue = oldValue;
    });
  }

  function isActive(number) {
    return vm.currentValue === number;
  }

  function isBefore(number) {
    return vm.previousValue !== vm.currentValue && number === vm.previousValue;
  }

  function isAnimated() {
    return vm.previousValue !== vm.currentValue;
  }
}

angular.module('dyFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-directive/angular-flip-clock-directive.html',
    '<div class="dy-flip-clock">\n' +
    '  <dy-flip-clock-label text="Hours" hide-divider="true"></dy-flip-clock-label>\n' +
    '  <dy-flip-clock-number value="vm.getHoursTensPlace()"></dy-flip-clock-number>\n' +
    '  <dy-flip-clock-number value="vm.getHoursOnesPlace()"></dy-flip-clock-number>\n' +
    '\n' +
    '  <dy-flip-clock-label text="Minutes"></dy-flip-clock-label>\n' +
    '  <dy-flip-clock-number value="vm.getMinutesTensPlace()"></dy-flip-clock-number>\n' +
    '  <dy-flip-clock-number value="vm.getMinutesOnesPlace()"></dy-flip-clock-number>\n' +
    '\n' +
    '  <dy-flip-clock-label text="Seconds"></dy-flip-clock-label>\n' +
    '  <dy-flip-clock-number value="vm.getSecondsTensPlace()"></dy-flip-clock-number>\n' +
    '  <dy-flip-clock-number value="vm.getSecondsOnesPlace()"></dy-flip-clock-number>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '');
}]);

angular.module('dyFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-label-directive/angular-flip-clock-label-directive.html',
    '<span class="dy-flip-clock-divider" ng-class="{\'dy-flip-clock-divider-hidden\': !!vm.hideDivider}">\n' +
    '  <span class="dy-flip-clock-label">{{vm.text}}</span>\n' +
    '  <span class="dy-flip-clock-dot dy-flip-clock-dot-top"></span>\n' +
    '  <span class="dy-flip-clock-dot dy-flip-clock-dot-bottom"></span>\n' +
    '</span>\n' +
    '');
}]);

angular.module('dyFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-number-directive/angular-flip-clock-number-directive.html',
    '<ul class="dy-flip-clock-number" ng-class="{\'dy-flip-clock-number-animated\': vm.isAnimated()}">\n' +
    '  <li\n' +
    '    ng-repeat="number in ::vm.numbers"\n' +
    '    class="dy-flip-clock-number-digit"\n' +
    '    ng-class="{\'dy-flip-clock-number-digit-active\': vm.isActive(number), \'dy-flip-clock-number-digit-before\': vm.isBefore(number)}"\n' +
    '  >\n' +
    '    <div class="dy-flip-clock-card">\n' +
    '      <div class="dy-flip-clock-card-up">\n' +
    '        <div class="dy-flip-clock-card-shadow"></div>\n' +
    '        <div class="dy-flip-clock-card-value dy-flip-clock-card-value-up">{{::number}}</div>\n' +
    '      </div>\n' +
    '      <div class="dy-flip-clock-card-down">\n' +
    '        <div class="dy-flip-clock-card-shadow"></div>\n' +
    '        <div class="dy-flip-clock-card-value dy-flip-clock-card-value-down">{{::number}}</div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </li>\n' +
    '</ul>\n' +
    '');
}]);
}());