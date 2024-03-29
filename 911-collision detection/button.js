// Kyle Knudson
// 9/11/19
// This is a comment
//  The setup function function is called once when your program begins
class Button {
  constructor(x, y, msg) {
    this.loc = createVector(x, y);
    this.msg = msg;  //text determining function of button
    this.clr = color(20, 100, 130);
  }//determining parts of buttons


run(){
  this.render();
}
render() {  //create button with all its info
  fill(this.clr);
  rect(this.loc.x, this.loc.y, 80, 80); // square shaped button
  fill(20, 100, 130);
  textSize(25);
  text(this.msg, this.loc.x, this.loc.y - 20);
}
}
