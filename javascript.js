$(document).ready(function(){


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
        $(".container").hide();
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
       $(".container").show(2000);
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


//1. set ul width 
//2. image when click prev/next button
var ul;
var liItems;
var imageNumber;
var imageWidth;
var prev, next;
var currentPostion = 0;
var currentImage = 0;


function init(){
  ul = document.getElementById('image_slider');
  liItems = ul.children;
  imageNumber = liItems.length;
  imageWidth = liItems[0].children[0].clientWidth;
  ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
  prev = document.getElementById("prev");
  next = document.getElementById("next");
  generatePager(imageNumber);
  .onclike = slide(-1) will be fired when onload;
  /*
  prev.onclick = function(){slide(-1);};
  next.onclick = function(){slide(1);};*/
  prev.onclick = function(){ onClickPrev();};
  next.onclick = function(){ onClickNext();};
}

function animate(opts){
  var start = new Date();
  var id = setInterval(function(){
    var timePassed = new Date() - start;
    var progress = timePassed / opts.duration;
    if (progress > 1){
      progress = 1;
    }
    var delta = opts.delta(progress);
    opts.step(delta);
    if (progress == 1){
      clearInterval(id);
      opts.callback();
    }
  }, opts.delay || 17);
  //return id;
}

function slideTo(imageToGo){
  var direction;
  var numOfImageToGo = Math.abs(imageToGo - currentImage);
  // slide toward left

  direction = currentImage > imageToGo ? 1 : -1;
  currentPostion = -1 * currentImage * imageWidth;
  var opts = {
    duration:1000,
    delta:function(p){return p;},
    step:function(delta){
      ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
    },
    callback:function(){currentImage = imageToGo;}  
  };
  animate(opts);
}

function onClickPrev(){
  if (currentImage == 0){
    slideTo(imageNumber - 1);
  }     
  else{
    slideTo(currentImage - 1);
  }   
}

function onClickNext(){
  if (currentImage == imageNumber - 1){
    slideTo(0);
  }   
  else{
    slideTo(currentImage + 1);
  }   
}

function generatePager(imageNumber){  
  var pageNumber;
  var pagerDiv = document.getElementById('pager');
  for (i = 0; i < imageNumber; i++){
    var li = document.createElement('li');
    pageNumber = document.createTextNode(parseInt(i + 1));
    li.appendChild(pageNumber);
    pagerDiv.appendChild(li);
    // add event inside a loop, closure issue.
    li.onclick = function(i){
      return function(){
        slideTo(i);
      };
    }(i);
  }
  var computedStyle = document.defaultView.getComputedStyle(li, null);
  //border width 1px; offsetWidth = 22
  var liWidth = parseInt(li.offsetWidth);
  var liMargin = parseInt(computedStyle.margin.replace('px',""));
  pagerDiv.style.width = parseInt((liWidth + liMargin * 2) * imageNumber) + 'px';
}
window.onload = init;

  
});
