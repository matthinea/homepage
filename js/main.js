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
  console.log(event);
  window.scrollTo(0, $portfolio.offset().top);
  $('#slick-slide02').click();
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








var $about = $('.about-wrapper');
var $aboutText = $('.about-wrapper p');
var aboutWp = new Waypoint({ 
  element: $about,
  handler: function(direction) {
    TweenMax.staggerTo($aboutText, 1.5, {
      opacity: 1,
    }, 0.2);
  }, 
  offset: $about.height() / 2 + 100
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
})
