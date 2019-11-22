// Kyle Knudson
// 10/31/19
// Snake Game

segments=[];
numberFood=0;
food=[];
score=0;
gameState=1;
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(3, 252, 248);
  endGame='no';
  hitFood='no';
  loadHead();
  loadFood();
  frameRate(12);
}

function draw() {
  if(gameState===1){
    startScreen();
  }
  if(gameState===2){
    playGame();
  }
  if(gameState===3){
    finalScreen();
  }
}

function startScreen(){
  background(3, 252, 248);
  textSize(75);
  fill(20, 20, 20);
  text('Snake Game',200,200);
  textSize(25);
  fill(20, 20, 20)
  text('Start',375,550);
  rect(375,575,50,50);
  fill(20, 20, 20);
  if(mouseIsPressed&&
      mouseX>375&&
      mouseX<425&&
      mouseY>575&&
      mouseY<625){
        clear();
        gameState=2;
      }
}

function playGame(){
  runSnake();
  runFood();
  if(hitFood==='yes'){
    numberFood=numberFood+1;
    hitFood='no';
  }
if (endGame==='yes'){
  clear();
  gameState=3;
}
}

function finalScreen(){
  background(255, 0, 0);
  textSize(25);
  fill(20, 20, 20);
  text('You lost! With a score '+ numberFood, 225,400);
  //textSize(25);
  //fill(20, 20, 20);
  text('Reload the page if you want to play again!', 215,525);
  //if(keyIsPressed&&
    //keyCode===SHIFT){
      //clear();
      //gameState=1;
  //}
}

function loadHead(){
  head= new Snake(0,0,0,0,15,color(1, 74, 16));
}
// snake size and color
function loadFood(){
  food[0]= new Food(int(random(40)),int(random(40)),15,0);
}
// food sizing and spawn placement
function runFood(){
  food[0].run();
}

function runSnake(){
  background(3, 252, 248);
  head.run();
}
