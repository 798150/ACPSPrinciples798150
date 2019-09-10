
// Kyle Knudson
//  9/05/19

var balls = []; //declares array
var mainBall;
var mainBall2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  //background(5, 5, 5, 10);

  loadBalls(300);


}


function draw() {
background(5,5,5,20);

  runBalls();
}

function loadBalls(x){
  mainBall = new Ball(random(width/2), random(height/2), random (-1,1), random(-1,1), 1);
  mainBall2 = new Ball(random(width/2), random(height/2), random (-1,1), random(-1,1), 1);
  for(var i = 0; i < x; i++){
    balls[i]=new Ball(random(width), random(height), random (-1,1), random(-1,1), i+3);
  }
}

function runBalls(){
  mainBall.run();
  mainBall2.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
}
}
