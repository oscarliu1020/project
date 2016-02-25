$(document).ready(function() {
  var slideSpeed = 2000;
  var slideAutoSwitch = true;
  var speed = 500;

  $("#work").hover(function(){
    $(".slide").hide();
    $("#workSlide").show();
});



  $("#about").hover(function(){
    $(".slide").hide();
    $("#aboutSlide").show();
});



  $("#contact").hover(function(){
    $(".slide").hide();
    $("#contactSlide").show();
});

  $('.slide').first().addClass('show');
  $('.slide').hide();
  $('.show').show();


  function nextSlide(){
    $(".show").addClass('oldShow').removeClass('show');
    if ($('.oldShow').is(":last-child")){
      $(".slide").first().addClass('show');
    }else{
      $(".oldShow").next().addClass('show');
    }

    $(".oldShow").removeClass('oldShow');
    $('.slide').fadeOut(500);
    $('.show').show(500);
  }

  setInterval(nextSlide,2000);

});
