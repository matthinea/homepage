let $pt = $("#pt");
let $mouse = $("#mouse");
let scrollArea = document.getElementById('hero-scroll-area');

for (let ii = 1; ii <= 12; ii++) {
  let wp = new Waypoint({
    element: scrollArea,
    handler: function(direction) {
      $pt.css({
        'filter'         : 'blur(' + ii + 'px)',
        '-webkit-filter' : 'blur(' + ii + 'px)',
        '-moz-filter'    : 'blur(' + ii + 'px)',
        '-o-filter'      : 'blur(' + ii + 'px)',
        '-ms-filter'     : 'blur(' + ii + 'px)'
      });
    },
    offset: (Waypoint.viewportHeight() / 25 * (ii + 1) + 100) * -1
  })
}

let $iconsText = $('.intro__icons__text');
let $intro = $('.intro');
let slideTime = 1;
let introPlaced = false;
let titleWp = new Waypoint({
  element: $intro,
  handler: function(direction) {
    if (direction == "down" && !introPlaced) {
      $intro.addClass('intro--brand-showing');
    }
    introPlaced = true;
  },
  offset: $intro.height() / 2 + 100
})

let $iconLinks = $('.intro__icons-wrapper a');
let introWp = new Waypoint({
  element: $intro, 
  handler: function(direction) {
    TweenMax.staggerTo($iconLinks, 2.5, {
      opacity: 1,
    }, 0.1);
    $iconsText.addClass('showing');
  },
  offset: $intro.height() / 2 - 200
})

let $about = $('.about-wrapper');
let $aboutText = $('.about-wrapper p');
let aboutWp = new Waypoint({ 
  element: $about,
  handler: function(direction) {
    TweenMax.staggerTo($aboutText, 1.5, {
      opacity: 1,
    }, 0.2);
  }, 
  offset: $about.height() / 2 + 100
})

let $cta = $('.cta');
let $ctaText = $('.cta-wrapper').children();
let ctaWp = new Waypoint({ 
  element: $cta,
  handler: function(direction) {
    TweenMax.staggerTo($ctaText, 1.5, {
      opacity: 1,
    }, 0.2);
  }, 
  // offset: $cta.height() / 2 + 100
})