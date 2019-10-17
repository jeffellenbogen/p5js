var x, y, xSpace, ySpace;
const radius = 50;
var r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(windowWidth);
  y = random(windowHeight);
  xSpace = random(100,300);
  ySpace = radius * 4;
  r = random(255);
  g = random(255);
  b = random(255);
  background(220);
  //noLoop();
}

function draw() {

  // Draw a circle
  noStroke();
  fill(r, g, b);
  circle(x, y, radius*2);

}


function newCircle() {
  x = x + xSpace
  if (x > windowWidth)
  	{
  	x = 0
  	y = y + ySpace
  	}
  if (y > windowHeight)
  	{
  	y = 0
  	}

  r = random(255);
  g = random(255);
  b = random(255);
}

setInterval(newCircle, 250);