'use strict';

/**
 * @ngdoc service
 * @name ambientalmexApp.semarnapi
 * @description
 * # semarnapi
 * Service in the ambientalmexApp.
 */
angular.module('ambientalmexApp')
  .service('semarnapi', function(Restangular) {
    this.Mia = Restangular.all('mia');
    this.Entidad = Restangular.all('mia');




  });
