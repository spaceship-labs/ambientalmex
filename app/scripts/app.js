'use strict';

/**
 * @ngdoc overview
 * @name ambientalmexApp
 * @description
 * # ambientalmexApp
 *
 * Main module of the application.
 */
angular
  .module('ambientalmexApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'restangular'
  ])
  .config(function ($routeProvider,$locationProvider) {
  	$locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
