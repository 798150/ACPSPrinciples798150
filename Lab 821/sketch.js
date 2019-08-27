//  Your Name
// 	Date or version number
Kyle Knudson
//  8/21/19

var b1; var b2;

function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
    b1 = new ball(random(width), random(height), random(-5,5), random(-5,5));
    b2 = new ball(random(width), random(height), random(-5,5), random(-5,5));
    b3 = new ball(random(width), random(height), random(-5,5), random(-5,5));
  }

  function draw() {

    b1.run();
    b2.run();
    b3.run();
  }
