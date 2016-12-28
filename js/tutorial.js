var space = new CanvasSpace();



var form = new Form(space);


var dot = new Circle( 250, 250 ).setRadius(50);
var another = new Circle( 100, 100).setRadius(50 );


var bot = {
    animate: function( time, fs, context ) {
        form.fill( "#999" )
        form.text(new Point(20, 20), "frame rate is " + (100/fs) );

        form.fill("#5AF").stroke(false);
        dot.setRadius(Math.abs(1000 - time % 2000)/20 + 50);
        form.circle(dot);

        form.fill(false).stroke("#fc0", 5);
        form.circle(another);

        var hits = another.intersectCircle(dot);
        if (hits.length > 0) {
          form.stroke( "#fff").fill("#0C9");
          form.line(new Line( hits[0]).to(hits[1]));
          form.points(hits, 5, true);
        }
    },

    onMouseAction: function(type, x, y, evt) {
      if (type === "move") {
        another.set( x, y);
      }
    }
};

space.add( bot ); 
space.bindMouse();
space.play();



