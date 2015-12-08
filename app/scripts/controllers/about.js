'use strict';

/**
 * @ngdoc function
 * @name domoHacksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the domoHacksApp
 */
angular.module('domoHacksApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
