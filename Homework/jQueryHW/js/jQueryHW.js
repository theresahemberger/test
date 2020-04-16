$(document).ready(function(){
$("#pagepiling").pagepiling();

  $(".content div:first-child").hide();
  $(".content div:nth-child(2)").hide();
  $(".content div:nth-child(3)").hide();

  $("footer").mouseover(function(){
      $("footer p").html("Email:theresahemberger@gmail.com Phone:123-456-7890" );
      $("footer p").css("color", "rgb(245, 174, 233)");

  });

  $("footer").mouseleave(function() {
    $("footer p").html("Contact Info");
  });

  $("#ingredients").click(function(){
    $(".content div:first-child").show();
    $(".content div:nth-child(2)").hide();
    $(".content div:nth-child(3)").hide();
  });

  $("#instructions").click(function(){
    $(".content div:first-child").hide();
    $(".content div:nth-child(2)").show();
    $(".content div:nth-child(3)").hide();
  });

  $("#tips").click(function(){
    $(".content div:first-child").hide();
    $(".content div:nth-child(2)").hide();
    $(".content div:nth-child(3)").show();
  });

  $(".slider").simpleSlider();

});
