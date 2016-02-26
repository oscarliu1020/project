$(document).ready(function() {
  var slideSpeed = 2000;
  var speed = 500;
  var slideAutoSwitch = true;

  $('.slide').first().addClass('active');
  $('.slide').hide();
  $('.active').show();

  function slideNext(){

    $(".active").addClass("oldActive").removeClass('active');
    if($(".oldActive").is(":last-child")){

      $(".slide").first().addClass('active');
    }else{
    $(".oldActive").next().addClass('active');
    }

    $('.oldActive').removeClass('oldActive');
    $(".slide").fadeOut(speed);
    $(".active").delay(speed).fadeIn(speed);
  }

  $("#work").mouseover(function(){
    $(".slide").hide();
    slideAutoSwitch = false;
    $("#workSlide").show();
  });

  $("#about").mouseover(function(){
    $(".slide").hide();
    slideAutoSwitch = false;
    $("#aboutSlide").show();
});

  $("#contact").mouseover(function(){
    $(".slide").hide();
    slideAutoSwitch = false;
    $("#contactSlide").show();
});

 if(slideAutoSwitch == true){
  setInterval(slideNext,slideSpeed);
  }

  if(slideAutoSwitch == true){
    console.log("true");
  }else{
    console.log(false);
  }
});
