@app = angular.module('navigato', ['ngRoute', 'ngResource', 'ngAnimate'])

@app.config(($routeProvider, $locationProvider)->
  $routeProvider
  .when('/',
    templateUrl:'templates/serp.html',
    controller:'serpController'
    )
  .when('/serp.html',
    templateUrl:'templates/serp.html',
    controller:'serpController'
    )
  .when('/pdp.html',
    templateUrl:'templates/pdp.html',
    controller:'pdpController'
    )
  .otherwise(
    redirectTo: '/'
    )
  )