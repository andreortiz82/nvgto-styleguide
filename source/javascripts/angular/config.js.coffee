@app = angular.module('navigato', ['ngRoute', 'ngResource', 'ngAnimate'])

@app.config(($routeProvider, $locationProvider)->
  $routeProvider
  .when('/',
    templateUrl:'templates/serp.html',
    controller:'demoController'
    )
  .when('/serp.html',
    templateUrl:'templates/serp.html',
    controller:'demoController'
    )
  .when('/pdp.html',
    templateUrl:'templates/pdp.html',
    controller:'demoController'
    )
  .otherwise(
    redirectTo: '/'
    )
  )