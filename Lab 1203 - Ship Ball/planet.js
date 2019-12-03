// Kyle Knudson
// 12/3/19
// planet class
class Ball{
  constructor(x,y,dx,dy){
    this.loc= createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(0, 0, 255);
    this.acc=createVector(0,0);
    this.w=50;

  }

  run(){
    this.render();
    this.checkEdges();
    this.update();
  }
  checkEdges(){
    if(this.loc.x>800){
      this.loc.x=0;
    }
    if(this.loc.x<0){
      this.loc.x=800;
    }
    if(this.loc.y>800){
      this.loc.y=0;
    }
    if(this.loc.y<0){
      this.loc.y=800;
    }

  }

  update(){
    if(dist<100){
      this.loc=createVector(random(width),random(height))
    }
    //var distToMainBallatt
    //var distToMainBallrep
//    if(this.id >= 0){
  //    distToMainBallatt = this.loc.dist(attractor.loc);
//      distToMainBallrep = this.loc.dist(repeller.loc);
//      if (distToMainBallatt<500){
//        //attraction
//        this.acc= p5.Vector.sub(mainBallatt.loc,this.loc);
//        this.acc.normalize();
  //      this.acc.mult(.5);
//      }
//      if(distToMainBallrep<200){
        //repulsion
//        this.acc=p5.Vector.sub(this.loc,mainBallrep.loc);
//        this.acc.normalize();
//        this.acc.mult(0.5);
//      }
//    }
    this.vel.limit(3);
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }
  render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, this.w, this.w);
    }

}
//end ball class