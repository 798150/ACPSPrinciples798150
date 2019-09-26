// Kyle Knudson
// 9/11/19
// This is a comment
//  The setup function function is called once when your program begins
class Paddle{
  constructor(x, y, w, h){
    this.loc = createVector(x,y);
    this.clr = color(random(255), random(255), random(255));
    this.w = w;
    this.h = h;
    }
  run(){
    this.render();
    this.checkedges();
    this.update();

  }
  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.w,this.h);
  }
  checkEdges(){

  }
  update(){
    var MouseLoc=createVector(mouseX,500);
    this.loc=p5.Vector.lerp(this.loc,MouseLoc,.9);
  }

  }
