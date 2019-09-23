// Kyle Knudson
// 9/11/19
// This is a comment
var mouseLoc;
class Paddle {
  constructor(x, y, w, h){
    this.clr = color(255, 0, 0);
    this.loc=createVector(x, y);
    this.w=100;
    this.h=25;
  }
run(){
  this.render();
  this.update();
  }

render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
  }

update(){
  var mouseLoc = createVector(mouseX, 700);
  this.loc = p5.vector.lerp(this.loc, mouseLoc, 0.9)
  }
}
