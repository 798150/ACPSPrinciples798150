// Aug 21

class Ball{//  ++++++++++++ start class
  constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255), random(255), random(255))
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.x < 0){
      this.dx = -this.dx;
    }
    if(this.x > width){
      this.dx = -this.dx;
    }
    if(this.y < 0){
      this.dy = -this.dy;
    }
    if(this.y > height){
      this.dy = -this.dy;
    }
  }
  update(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }

  render(){
    fill(random(255), random(255), random(255));
    ellipse(this.x, this.y, 30, 30);
  }
}
 //  +++++++++++++++++++++++++++  end class
