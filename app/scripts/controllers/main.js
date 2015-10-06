'use strict';

/**
 * @ngdoc function
 * @name ambientalmexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ambientalmexApp
 */
angular.module('ambientalmexApp')
  .controller('MainCtrl', function ($scope, semarnapi) {
    $scope.semarnapi = semarnapi;

  });
