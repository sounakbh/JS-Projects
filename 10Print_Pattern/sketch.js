let x = 0;
let y = 0;
let gap = 10;

function setup(){
  createCanvas(400, 400);
  background(255);
}

function draw(){
  if(random(1) < 0.5){
    line(x, y, x + gap, y + gap);
  }
  else{
    line(x, y + gap, x + gap, y);
  }
  x = x + 10;
  if(x > width){
    x = 0;
    y = y + gap;       
  } 
}