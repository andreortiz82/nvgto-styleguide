// This is where it all goes :)
$(function(){

  // Toggle Like icon
  $('.favorite-icon').on('click', function(){
    $(this).toggleClass('liked')
  })

  // Toggle Dropdown State
  $('.dropdown-element').on('click', function(){
    $(this).toggleClass('active')
  })

  // Concept Button State
  $('.concept-button').on('click', function(){
    $(this).toggleClass('active')
  })

  

})