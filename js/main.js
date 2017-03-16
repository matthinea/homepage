var $pt = $("#pt");
var $pt_svg = $("#pt_svg")
var $mouse = $("#mouse");
var $portfolio = $(".portfolio");
var scrollArea = document.getElementById('hero-scroll-area');

var wp;
var _loop = function _loop() {
  var filter = 'filter-' + ii;
  wp = new Waypoint({
    element: scrollArea,
    handler: function handler(direction) {
      $pt_svg.toggleClass(filter);
    },
    offset: -40 * ii
  });
};

for (var ii = 1; ii <= 12; ii++) {
  _loop();
}

$('.scroll-to-portfolio').on('mousedown', function(event) {
  // event.preventDefault();
  console.log($portfolio.offset().top - $portfolio.css('margin-top'));
  window.scrollTo(0, $about.offset().top + $about.outerHeight(true));
  if (event.currentTarget.innerHTML === 'browser games') {
    $('#slick-slide02').click();
  }
})




// waypoints
var $iconsText = $('.intro__icons__text');
var $intro = $('.intro');
var slideTime = 1;
var introPlaced = false;
var titleWp = new Waypoint({
  element: $intro,
  handler: function(direction) {
    if (direction == "down" && !introPlaced) {
      $intro.addClass('intro--brand-showing');
    }
    introPlaced = true;
  },
  offset: 200
})




var $iconLinks = $('.intro__icons-wrapper a');
var introWp = new Waypoint({
  element: $intro, 
  handler: function(direction) {
    TweenMax.staggerTo($iconLinks, 2.5, {
      opacity: 1,
    }, 0.1);
    $iconsText.addClass('showing');
  },
  offset: 50
})








var $about = $('.about');
var $aboutText = $('.about-wrapper p');
var aboutWp = new Waypoint({ 
  element: $about,
  handler: function(direction) {
    TweenMax.staggerTo($aboutText, 1.5, {
      opacity: 1,
    }, 0.2);
  },
  offset: 100
})


var $portfolio = $(".portfolio");
var portfolioWp = new Waypoint({ 
  element: $portfolio,
  handler: function(direction) {
    $portfolio.addClass('showing');
  }, 
  offset: $portfolio.height() / 2 + 100
})



var $cta = $('.cta');
var $ctaText = $('.cta-wrapper').children();
var ctaWp = new Waypoint({ 
  element: $cta,
  handler: function(direction) {
    TweenMax.staggerTo($ctaText, 1.5, {
      opacity: 1,
    }, 0.2);
  }, 
  offset: 50
});


$(document).ready(function(){
  $('.portfolio').slick({
    dots: true,
    fade: true,
    nextArrow: '.slick-next',
    prevArrow: '.slick-prev',
    responsive: [
      {
        breakpoint: 425,
        settings: {
          fade: false
        }
      }
    ]
  });
});


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
});