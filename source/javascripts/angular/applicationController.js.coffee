@app.controller('serpController', ['$scope', ($scope) ->
  $scope.pageClass = 'serp pt-page-current';
  console.log 'serp'
  return
])

@app.controller('pdpController', ['$scope', ($scope) ->
  $scope.pageClass = 'pdp pt-page-current';
  console.log 'pdp'
  return
])