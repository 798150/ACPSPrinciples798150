// Kyle Knudson
// 10/25/19

class Bar{
  constructor(x,y,w,h,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
  }
run(){
  //main function in class
  this.render();

}
render(){
  fill(255,155,50);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}
set(i){
  this.loc.x=i*25;
}
}
