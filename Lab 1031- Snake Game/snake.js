class Snake{
  constructor(x,y,dx,dy,w,c){
    this.loc=createVector(x,y);
    this.vel=createVector(dx,dy);
    this.w=w;
    this.clr=c;
    this.body=[];
  }

  run(){
    this.render();
    this.checkEdges();
    this.update();
    this.tangled();
    this.hitFood();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x*this.w,this.loc.y*this.w,this.w,this.w);
    for (var i=0; i<this.body.length; i++){
      rect(this.body[i].x*this.w,this.body[i].y*this.w, this.w, this.w);
    }
  }

checkEdges(){
  //if hits left side
  if(this.loc.x<0){
    endGame='yes';
  }
  if(this.loc.x>width/this.w){
    //if hits right side
    endGame='yes';
  }
  if(this.loc.y<0){
    //if hits top
    endGame='yes';
  }
  if(this.loc.y>height/this.w){
    //if hits bottom
    endGame='yes';
  }
}

  update(){
    if(keyIsPressed&&
      keyCode===RIGHT_ARROW){
        head.vel.x=1;
        head.vel.y=0;
      }
      if(keyIsPressed&&
        keyCode===LEFT_ARROW){
          head.vel.x=-1;
          head.vel.y=0;
        }
        if(keyIsPressed&&
          keyCode===UP_ARROW){
            head.vel.x=0;
            head.vel.y=-1;
          }
          if(keyIsPressed&&
            keyCode===DOWN_ARROW){
              head.vel.x=0;
              head.vel.y=1;
            }
    if(this.body.length>0){
      for (var i=this.body.length-1; i>0; i--){
        this.body[i].x=this.body[i-1].x;
        this.body[i].y=this.body[i-1].y;
      }
      this.body[0].x=head.loc.x;
      this.body[0].y=head.loc.y;
    }
    head.loc.add(this.vel);

  }
  
  function startScreen(){
    textSize(75);
    fill(255,0,0);
    text('Snake Game',200,200);
    textSize(25);
    fill(0,255,0)
    text('Start',375,550);
    rect(375,575,50,50);
    fill(0,0,255);
    text('Click the start box to begin the game. You are the red snake',50,350);
    text('After you start, use the arrow keys to move the snake',50,375);
    text('Your goal is to eat as much food as possible. If you',50,400);
    text('eat a food, you grow one length. If you turn into yourself,',50,425);
    text('you die, and the game ends. Good luck!',50,450);
    if(mouseIsPressed&&
        mouseX>375&&
        mouseX<425&&
        mouseY>575&&
        mouseY<625){
          clear();
          gameState=2;
        }
  }

tangled(){
for (var i=0; i<this.body.length; i++){
  if (head.loc.x===this.body[i].x||head.loc.y===this.body[i].y){
    endGame='yes';
  }
}
}

hitFood(){
    if(head.loc.x===food[0].loc.x&&
        head.loc.y===food[0].loc.y){
          food[0]= new Food(int(random(53)),int(random(53)),15,0);
          this.body.push(createVector(head.loc.x,head.loc.y));
          hitFood='yes';
  }
    }
}
