let $pt = $("#pt");
let scrollArea = document.getElementById('hero-scroll-area');

for (let ii = 1; ii <= 10; ii++) {
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
      console.log("down");
    },
    offset: (Waypoint.viewportHeight() / 25 * (ii + 1) + 200) * -1
  })
}