var $heroArrow = $('.hero .scroll-invitation');
var $introArrow = $('.intro .scroll-invitation');
var $aboutArrow = $('.about .scroll-invitation');

var arrows = [
  $heroArrow,
  $introArrow,
  $aboutArrow
]

for(let idx = 0; idx < arrows.length; idx++) {
  arrows[idx].on('click', function(event) {
    $('html, body').animate({scrollTop: window.innerHeight * (idx + 1)}, 1000, "easeOutCubic");
  })
}