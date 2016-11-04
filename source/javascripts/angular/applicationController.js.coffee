@app.controller('serpController', ['$scope', '$window', ($scope, $window) ->
  $scope.pageClass = 'serp';
  $scope.menuIsOpen = false;

  $scope.openMenu = () =>
    $scope.menuIsOpen = !$scope.menuIsOpen

    console.log 'clicked!', $scope.menuIsOpen

    if $scope.menuIsOpen
      $scope.pageClass = 'serp menu-open';
    else
      $scope.pageClass = 'serp';
    return

  return
])

@app.controller('pdpController', ['$scope', '$window', ($scope, $window) ->
  $scope.pageClass = 'pdp';

  $scope.openMenu = () =>
    $scope.menuIsOpen = !$scope.menuIsOpen
    
    console.log 'clicked!', $scope.menuIsOpen

    if $scope.menuIsOpen
      $scope.pageClass = 'serp menu-open';
    else
      $scope.pageClass = 'serp';
    return
  return
])
