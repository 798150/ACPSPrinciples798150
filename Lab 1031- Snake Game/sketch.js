// Kyle Knudson
// 10/31/19
// Snake Game
segments=[];
numberFood=0;
food=[];
score=0;
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 98, 45);
  endGame='no';
  hitFood='no';
  loadHead();
  loadFood();
  frameRate(15);
}

function draw() {
  runSnake();
  runFood();
  if(hitFood==='yes'){
    numberFood=numberFood+1;
    hitFood='no';
  }
//if (endGame==='yes'){
  //remove();
  //clear();
//}
}

function loadHead(){
  head= new Snake(0,0,0,0,15,color(250, 150, 0));
}

function loadFood(){
  food[0]= new Food(int(random(53)),int(random(53)),15,0);
}

function runFood(){
  food[0].run();
  //for (var i=0; i<food.length;i++){
    //food[i].run();
  //}
}

function runSnake(){
  background(0, 98, 245);
  head.run();
}

// function addSegments(){
  // if(segments[numberFood-1].vel.x===3){
  // segments[numberFood]= new Snake(segments[numberFood-1].loc.x-segments[numberFood-1].w,segments[numberFood-1].loc.y,3,0,25,color(255,0,0),numberFood);
  // }
  // if(segments[numberFood-1].vel.x===-3){
    // segments[numberFood]= new Snake(segments[numberFood-1].loc.x+segments[numberFood-1].w,segments[numberFood-1].loc.y,-3,0,25,color(255,0,0),numberFood);
  // }
  // if(segments[numberFood-1].vel.y===3){
    // segments[numberFood]= new Snake(segments[numberFood-1].loc.x,segments[numberFood-1].loc.y-segments[numberFood-1].w,0,3,25,color(255,0,0),numberFood);
  // }
  // if(segments[numberFood-1].vel.y===-3){
    // segments[numberFood]= new Snake(segments[numberFood-1].loc.x,segments[numberFood-1].loc.y+segments[numberFood-1].w,0,-3,25,color(255,0,0),numberFood);
  // }
// }
