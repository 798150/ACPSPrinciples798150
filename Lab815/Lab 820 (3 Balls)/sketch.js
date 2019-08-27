//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  x = random(-200, 200);
  y = random(-400, 400);
  speedX = random (-15.0, 15.0);
}

//  The draw function is called @ 30 fps
function draw() {
background(200, 0, 0);
if(x < 0){
  speedX = -1*speedX;
}
if(x > width){
  speedX = -speedX;
}
x = x + speedX;
fill(255, 255, 255);
ellipse(x, y, 50,50);

fill(0, 255, 0);
ellipse(x, y, 80,80);
}
