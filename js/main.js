let $pt = $("#pt");
let $mouse = $("#mouse");
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

let wp = new Waypoint({
  element: scrollArea,
  handler: function(direction) {
    console.log($(window).scrollTop());
    $('#mouse').css({
      'position': 'fixed',
      'transform': 'translateY(' + $(window).scrollTop() + 'px)'
    });
    $('.mouse__container').css({
      // 'transform': 'translateY(' + $(window).scrollTop() * -1 + 'px)'
    })
    setTimeout(function(){
      console.log($('.mouse__container').css("transition-duration"));
    },500);
  }, 
  offset: -400
})