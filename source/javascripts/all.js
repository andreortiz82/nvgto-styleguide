// This is where it all goes :)
$(function(){

  // Toggle Like icon
  $('.favorite-icon').on('click', function(){
    $(this).toggleClass('liked')
  })

  // Toggle Dropdown State
  $('.dropdown-element').on('click', function(e){
    e.preventDefault()
    $(this).toggleClass('active')
  })

  // Concept Button State
  $('.concept-button').on('click', function(){
    $(this).toggleClass('active')
  })

  // Focus Window
  $('.focus-element').on('click', function(){
    var width_of_el = $(this).width()
    $(this).width(width_of_el)
    $('body').toggleClass('set-focus')
    $(this).toggleClass('active')
  })

})