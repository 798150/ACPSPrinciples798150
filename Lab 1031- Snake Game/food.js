
class Food{
  constructor(x,y,w,id){
    this.loc=createVector(x,y);
    this.w=w;
    this.clr=color(220, 10, 200);
    this.id=id;
  }

  run(){
    this.render();
    this.update();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x*this.w,this.loc.y*this.w,this.w,this.w);
  }

  update(){

  }

}
