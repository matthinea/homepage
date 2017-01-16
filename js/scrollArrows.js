var $arrow = $('.scroll-invitation');
var frameNum = 1;

$arrow.on('click', function(event) {
  $('html, body').animate({scrollTop: window.innerHeight * frameNum}, 1000, "easeOutCubic");
  if(frameNum <= 2) {
      $arrow.css({
      "transform": "translateY(" + (window.innerHeight * frameNum) + "px)"
    });
    frameNum++;
  } 
})
