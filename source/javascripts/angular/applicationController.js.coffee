@app.controller('demoController', ['$scope', ($scope) ->
  $scope.pageClass = 'demo';
  console.log 'hello from demoController'
  return
])