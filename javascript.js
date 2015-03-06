$(document).ready(function ($){


  $("#aboutme").click(function(){
   $("h1").fadeOut();
    $("#portfolio").fadeOut();
     $("#projects").fadeOut();
      $("#aboutme").fadeOut();
       $("#info").fadeIn(2000);
        $("#back").show(500);
         $("#base").animate({height:'150px'},2000);
       
  });

   $("#back").click(function(){
    $("h1").fadeIn(2000);
     $("#portfolio").fadeIn();
      $("#projects").fadeIn();
       $("#aboutme").fadeIn();
        $("#slider").hide();
         $("#base").animate({height:'3px'});
          $("#back").hide();
           $("#info").hide();
            $("#tidy").hide();
             $("#proheading").hide();
              $("footer").show();
   });
  
  $("#portfolio").click(function(){
   $("h1").fadeOut();
    $("#portfolio").fadeOut();
     $("#projects").fadeOut();
      $("#aboutme").fadeOut();
       $("#slider").animate(2000);
        $("#back").show(500);
         //$(".slider_wrapper").show();
         // $("#image_slider").show();
               //$("div").animate({height:'1px'});
  });

  $("#projects").click(function(){
   $("h1").fadeOut();
    $("#portfolio").fadeOut();
     $("#projects").fadeOut();
      $("#aboutme").fadeOut();
       $("#proheading").fadeIn(2000);
        $("#tidy").fadeIn(2000);
         $("#back").show(500);
          $("#base").animate({height:'84%'},2000);
           $("footer").hide();
               
   });


  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});   

