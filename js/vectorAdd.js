
//// 1. Define Space and Form
var colors = {
  a1: "#820e80", a2: "#82380e", a3: "#2e43eb", a4: "#ffe359",
  b1: "#96bfed", b2: "#f5ead6", b3: "#f1f3f7", b4: "grey"
}
var space = new CanvasSpace("pt").setup( {bgcolor: colors.b4} );
var form = new Form( space );


//// 2. Create Elements
var center = new Vector(space.size.$divide(2));
var mouse = new Vector( space.size.x/2, space.size.y/1.35);
// relative vectors - used only as dist from center
var vec1 = new Vector( -space.size.x /3, -space.size.y  /3); 
var vec2 = new Vector( space.size.x /3, -space.size.y /3 ); 
var Vectors = { 
    "vec1": vec1.$add(center), 
    "vec2": vec2.$add(center) 
}


// GSAP 
var mouseTweenVals = [];
var numTweens = 12;
var time = numTweens * 2;

for( let i = 0; i < numTweens; i++) {
    let x = Math.random() * space.size.x / 2;
    x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // 50% chance of negative val
    let y = Math.random() * space.size.y;    
    mouseTweenVals.push({x, y});
}
TweenMax.to("#mouse", time, {
    bezier: {
        type: "soft", 
        values: mouseTweenVals,
        autoRotate: true
    },
    ease: Power0.easeNone, repeat: -1, yoyo: true
})


//// 3. Visualize, Animate, Interact
space.add({
  animate: function(time, fps, context) {

    var position = $('#mouse').position();
    mouse.set(position.left, position.top);

    form.stroke("#9ab");

    // mouse vector. Gray line.
    var mouseVec = mouse.$subtract( center );
    // form.line( new Line( center ).to( mouseVec.$add( center ) ) );

    form.stroke("#fff");

    // Two fixed vectors vec1 and vec2, connected to center as blue lines.
    form.stroke( colors.b1, 2 );
    form.line( new Line( center ).to( vec1.$add( center ) ) );
    form.line( new Line( center ).to( vec2.$add( center ) ) );

    // vector addition between mouse vector and vec1/vec1, and then connect to center as pink line.
    form.stroke( colors.a1 );
    var add1 = vec1.$add( mouseVec );
    form.line( new Line( center ).to( add1.$add( center ) ) );
    var add2 = vec2.$add( mouseVec );
    form.line( new Line( center ).to( add2.$add( center ) ) );
    Vectors['add1'] = add1.$add(center);
    Vectors['add2'] = add2.$add(center);

    // vector subtraction between mouse vector and vec1/vec1, and then connect to center as green line.
    form.stroke( colors.a2 );
    var sub1 = vec1.$subtract( mouseVec );
    var subline1 = new Line( center ).to( sub1.$add( center ) );
    form.line( subline1 );
    var sub2 = vec2.$subtract( mouseVec );
    var subline2 = new Line( center ).to( sub2.$add( center ) );
    form.line( subline2 );
    Vectors['sub1'] = sub1.$add(center);
    Vectors['sub2'] = sub2.$add(center);

    // vector subtration between vector addition & subtraction
    form.stroke("#42f4c5");
    var sub5 = sub1.$subtract(add1);
    var subline5 = new Line( center ).to( sub5.$add( center ) );
    form.line(subline5);
    var sub6 = sub2.$subtract(add1);
    var subline6 = new Line( center ).to ( sub6.$add( center ));
    form.line(subline6);
    Vectors['sub5'] = sub5.$add(center);
    Vectors['sub6'] = sub6.$add(center);

    form.stroke("orange");
    var add3 = add1.$subtract(sub2);
    form.line( new Line( center ).to ( add3.$add( center ) ) );
    var add4 = add2.$subtract(sub1);
    form.line( new Line( center ).to ( add4.$add( center ) ) );
    Vectors['add3'] = add3.$add( center);
    Vectors['add4'] = add4.$add( center);

    // then automate rotation of "mouse" (to avoid user interaction)

    // NEW IDEA: "flicker" some lines on and off depending on modulos of time


    // NEW IDEA: add vectors peppered around perimeter (use pt's Gaussian) and iteratively add and subtract

    // NEW IDEA: Randomly position unmoving blue vectors
    // NEW IDEA: scale center from mousePos as in circleIntersectPoint.js
    // NEW IDEA: thickness of lines change depending on nearness to center. 

    form.stroke( colors.b3, 1 );
    var sub3 = vec1.$subtract( mouseVec );
    var subline3 = new Line( mouse ).to( sub3.$add( mouse ) );
    form.line( subline3 );
    var sub4 = vec2.$subtract( mouseVec );
    var subline4 = new Line( mouse ).to( sub4.$add( mouse ) );
    form.line( subline4 );

    let difSums = {};
    let mouseX = mouse.x; 
    let mouseY = mouse.y;
    for( v in Vectors) {
        let vector = Vectors[v];
        let difSum = (Math.abs(vector.x - mouseX) + Math.abs(vector.y - mouseY));
        difSums[v] = difSum;
    }
    var closest = this._getClosestPoint(difSums);
    var shortL1 = new Line(Vectors[closest]).to(mouse);
    form.line(shortL1);

    var nextClosest = this._getNextClosestPoint(difSums, closest);
    var shortL2 = new Line(Vectors[nextClosest]).to(mouse);
    form.line(shortL2);



    // Draw mouse
    form.fill( "black").stroke(false);
    form.point( mouse, 3, true );
  },

  onMouseAction: function(type, x, y, evt) {
    if (type=="move") {
      mouse.set(x,y);
    }
  },

  onTouchAction: function(type, x, y, evt) {
    this.onMouseAction( type, x, y );
  },

  // UTILS

  _getClosestPoint: function(difSums) {
    var closest;
    var minVal = Object.keys(difSums).reduce(function(m, k){ 
        if (difSums[k] < m) {
            closest = k;
            return difSums[k];
        } else {
            return m;
        }
    }, Infinity)
    return closest;
  },

  _getNextClosestPoint: function(difSums, closest) {
    var nextClosest;
    var minVal = Object.keys(difSums).reduce(function(m, k){ 
        if (k != closest && difSums[k] < m) {
            nextClosest = k;
            return difSums[k];
        } else {
            return m;
        }
    }, Infinity)
    return nextClosest;
  }
});

// 4. Start playing
// space.bindMouse();
space.bindTouch();
space.play();