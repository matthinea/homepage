//// 0. Describe this demo
window.demoDescription = "A circle moves in a field of random points. If a point intersects with the circle, it grows bigger and moves slightly toward the circle's center.";


//// 1. Define Space and Form
var colors = {
  a1: "#ff2d5d", a2: "#42dc8e", a3: "#2e43eb", a4: "#ffe359",
  b1: "#96bfed", b2: "#f5ead6", b3: "#f1f3f7", b4: "#e2e6ef"
};
var space = new CanvasSpace("#pt").setup( {bgcolor: "#222"} );
var form = new Form( space );



console.log(space);

//// 2. Create Elements
var mouse = new Circle( $(window).width() / 2, -200 ).setRadius(200);
var pts = [];
for (var i=0; i<500; i++) {
  let pt = space.size.$multiply( Math.random(), Math.random());
  pts.push( pt ); // GOOD WAY TO RANDOMLY DISTRIBUTE POINTS
}

var lastTop = 0;
$(window).scroll(function() {
  thisTop = $(this).scrollTop();
  if(thisTop > lastTop) {
    let newY = mouse.y + 10
    mouse.set(mouse.x, newY);
  }
  lastTop = thisTop;

})

//// 3. Visualize, Animate, Interact
space.add({
  animate: function(time, fps, context) {

    // change mouse radius
    mouse.setRadius( mouse.y/space.size.y * 200 + 200 );
    form.stroke(false);

    // go through each point
    for (var i=0; i<pts.length; i++) {

      var size = 0.5;
      var _p = pts[i].clone();

      // if intersecting with mouse circle, change its size and scale from mouse anchor point
      if (mouse.intersectPoint( pts[i]) ) {
        var dist =  (mouse.radius - pts[i].distance( mouse )) / mouse.radius; // dist as % inside mouse radius circle
        size = dist * 20;
        form.fill( colors["a"+(i%4+1)] );
        _p.scale2D( 1+dist, 1+dist, mouse );

      } else {
        form.fill( "#fff" );
      }

      // draw points
      form.point( _p, size, true );
    }
  },

  onMouseAction: function(type, x, y, evt) {
    // mouse.set(x,y);
  },

  onTouchAction: function(type, x, y, evt) {
    this.onMouseAction( type, x, y );
  }
});




// 4. Start playing
space.bindMouse();
space.bindTouch();
space.play();