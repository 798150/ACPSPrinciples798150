
// Kyle Knudson
//  9/11/19
// attraction
// The setup function is called once when your program begins

var paddle;
var ball;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  //background(5, 5, 5, 10);
  drawpaddle();
  drawBall():


}

function draw() {
background(5,5,5,20);
  runPaddle();
  runBall();
}

function drawPaddle() {
  paddle = new Paddle(100, 400, 300, 50);
}
}
}
