# SERVICES
# ------------
# Authenticate with HarvestHQ
@app.service('teamService', ['$q','$resource', ($q, $resource) ->

  @updateTeamData = (data) ->
    q = $q.defer()
    Parse.initialize('xtQyhi8nl0AHSj7F0AZNPP0f9D0VcQunE4zAwXEy', 'mSipK319wU7hzlmADN3vhPPAVbebfZHVi19CQWoJ')
    BuilderObject = Parse.Object.extend('BuilderObject')
    team = new Parse.Query(BuilderObject)
    team.get(data.id, {
      success: (result) ->
        result.set('name', data.name)
        result.set('dealership', data.dealership)
        result.set('comment', data.comment)
        s = result.save()
        q.resolve(s)

      error: (object, error) ->
        q.reject(false)
      })
    return q.promise

  @getTeamData = (dataID) ->
    data = {}
    q = $q.defer()

    Parse.initialize('xtQyhi8nl0AHSj7F0AZNPP0f9D0VcQunE4zAwXEy', 'mSipK319wU7hzlmADN3vhPPAVbebfZHVi19CQWoJ')
    BuilderObject = Parse.Object.extend("BuilderObject")
    team = new Parse.Query(BuilderObject)
    team.get(dataID, {
    success: (result) ->
      data.name = result.get('name')
      data.dealership = result.get('dealership')
      data.comment = result.get('comment')
      q.resolve(data)
    error: (object, error) ->
      q.reject(false)
    })

    return q.promise

  @loadVideo = (url)->
    return url

  return
])