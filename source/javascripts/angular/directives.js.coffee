# DIRECTIVES
# ------------
@app.directive('ebNav', ['$location', ($location)->
  return {
    restrict:'A',
    templateUrl: 'templates/navigation.html',
    replace: false,
    scope: {},
    link: (scope, element, attr) ->
      scope.isActive = (viewLocation)->
        active = (viewLocation == $location.path())
        return active;
  }
])

@app.directive('ebInfoBox', ['$window', ($window)->
  return {
    restrict:'A',
    replace: false,
    scope: {
      title:'@'
      name:'@'
      dealership:'@'
      comment:'@'
      },
    link: (scope, element, attr) ->
      width = element[0].offsetWidth
      # console.log element
      minimized = false

      element.bind('click', ()->
        if !minimized
          element[0].style.left = '-'+(width-40)+'px'
          minimized = true
          # console.log minimized
        else
          element[0].style.left = '0px'
          minimized = false
          # console.log minimized

        )
  }
])