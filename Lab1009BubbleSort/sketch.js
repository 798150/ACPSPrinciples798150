
// Kyle Knudson
//  10/9/19
// Button sort
var list = [2, 5, 9, 8, 7, 6, 1, 3, 4, 10];//creates the array
console.log(list);
var l = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadList(10);
  console.log(l);
  for(var i = 0; i < l.length; i++){
    for(var j = 0; j < l.length; j++){
      if(l[j] > l[j + 1]){
        swap(l, j, j + 1);
        }
    }
  }
  console.log(l);
}


function swap(list, a, b) {
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

for(var i = 0; i < list.length; i++){
  for(var j = 0; j < list.length; j++){
    if(list[j] > list[j + 1]){
      swap(list, j, j + 1);
      }
  }
}
console.log(list);
