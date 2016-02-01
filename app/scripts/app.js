'use strict';

/**
 * @ngdoc overview
 * @name angyogrApp
 * @description
 * # angyogrApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
       .when('/map', {
        templateUrl: 'views/geomap_mini.html',
        controller: 'geoCtrl',
        controllerAs: 'map'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
