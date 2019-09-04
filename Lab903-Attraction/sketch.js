
// Kyle Knudson
//  8/26/19

var balls = []; //var b1, b2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(500);//  b1 = new Ball(random(width), random(height), random(-9,9), random(-9,9));
//  b2 = new Ball(random(width), random(height), random(-9,9), random(-9,9));
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20 ,20);
  runBalls();// b1.run();
// b2.run();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball (random(width), random(height), random(-7, 7),random(-7, 7));
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

  update(){
    var distToMainBall;
    if(this.id >= 0){
      disToMainBall = this.loc.dist(mainBall.loc);
      if(distToMainBall < 250){
        this.acc = p5.Vector.sub( mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
    }
  }
