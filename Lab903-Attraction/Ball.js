// Aug 21

class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    //this.acc = createVector(0, 1)
    this.clr = color(random(255), random(255), random(255));
  }
run(){
  this.checkedges();
  this.update();
  this.render();
  }

checkedges(){
  if(this.loc.x < 0){
    this.vel.dx = -this.vel.dx;
  }
  if(this.loc.x > width){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y < 0){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y > height){
    this.vel.y = -this.vel.y;
  }
}
  update(){
    //this.vel.add(this.acc)
    this.loc.add(this.vel)
  }
  render(){
    fill(this.clr);
    ellipse(this.x, this.y, 50, 50);
  }
}

 //  +++++++++++++++++++++++++++  end class
