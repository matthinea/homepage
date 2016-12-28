let $pt = $("#pt");
let blur = 1;
let scrollCount = 0;
let lastTop = 0;
$(window).scroll(function() {
  if (blur > 9) {
    blur = 9;
  } else if (blur < 1) {
    blur = 1;
  }
  let thisTop = $(this).scrollTop();
  if(thisTop > lastTop) {
    if (scrollCount % 5 === 0) {
      $pt.css({
         'filter'         : 'blur(' + blur + 'px)',
         '-webkit-filter' : 'blur(' + blur + 'px)',
         '-moz-filter'    : 'blur(' + blur + 'px)',
         '-o-filter'      : 'blur(' + blur + 'px)',
         '-ms-filter'     : 'blur(' + blur + 'px)'
      });
      blur += 1;
    }
    scrollCount++;
  } else {
    if (scrollCount % 2 === 0) {
      blur -= 1;
      $pt.css({
        'filter'         : 'blur(' + blur + 'px)',
        '-webkit-filter' : 'blur(' + blur + 'px)',
        '-moz-filter'    : 'blur(' + blur + 'px)',
        '-o-filter'      : 'blur(' + blur + 'px)',
        '-ms-filter'     : 'blur(' + blur + 'px)'
      });
    }
  }
  lastTop = thisTop;
})
