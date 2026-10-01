
let angle; 
let rotSpeed;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

angleMode(DEGREES);
rectMode(CENTER); 

angle = 0;
rotSpeed = 2;

}

function draw() {
  // Set background to black
  background(0);
 
  // red squares
  noFill();
  strokeWeight(15);
  stroke('red');
  
  push();
  translate(width/2, height/2);
  rotate(angle);
  rect(0, 0, 200, 200);
  pop();



  angle += rotSpeed;

  //yellow squares
  noFill();
  strokeWeight(15);
  stroke('yellow');

  push();
  translate(width/2, height/2);
  rotate(-angle/2);
  rect(0, 0, 100, 100);
  pop();


  //flower circle
  fill('brown');
  circle(width/2, height/2, 110, 110);


}
