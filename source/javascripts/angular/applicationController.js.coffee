@app.controller('serpController', ['$scope', '$window', ($scope, $window) ->
  $scope.pageClass = 'serp';
  return
])

@app.controller('pdpController', ['$scope', '$window', ($scope, $window) ->
  $scope.pageClass = 'pdp';
  return
])