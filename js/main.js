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


// consider refactoring from tweenmaxes to pure css transitions
let $intro = $('.intro');
let slideTime = 1;
let introPlaced = false;
let titleWp = new Waypoint({
  element: $intro,
  handler: function(direction) {
    if (direction == "down" && !introPlaced) {
      TweenMax.fromTo('.intro__brand', slideTime, {
      y: $(window).height() / 2, 
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    })
    TweenMax.fromTo('.intro__description', slideTime, {
      y: -1 * $(window).height() / 2, 
      opacity: 0
    }, {
      y: -20,
      opacity: 1
    })
    }
    introPlaced = true;
  },
  offset: $intro.height() / 2 + 100
})

let introWp = new Waypoint({
  element: $intro, 
  handler: function(direction) {
    console.log("you're here, mate");
  },
  offset: $intro.height() / 2 - 200
})