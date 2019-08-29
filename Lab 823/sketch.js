
// Kyle Knudson
//  8/26/19

var balls = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(130);
  }


function draw(){
  background(0, 255, 0, 30);
  runBalls();
}


function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-8, 8), random(-8, 8));
  }
}


 function runBalls(){
   for(var i = 0; i < balls.length; i++) {
     balls[i].run();
   }
 }
