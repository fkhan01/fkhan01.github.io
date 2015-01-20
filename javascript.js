$(document).ready(function() {

   $('#example').hide();

});


$(document).ready(function(){
 $("#aboutme").click(function(){
  $("h1").fadeOut();
   $("#portfolio").fadeOut();
    $("#projects").fadeOut();
      $("#info").show(2000);
      $("#back").show();
       $("div").animate({height:'350px',width:'400px'},2000);
       
  });
  $("#back").click(function(){
   $("h1").fadeIn(2000);
    $("#portfolio").fadeIn();
     $("#projects").fadeIn();
      $("div").animate({height:'3px',width:'70px'});
       $("#back").hide();
         $("#info").hide();
  });
});