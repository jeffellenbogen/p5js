canvasWidth = 1400
canvasHeight = 700
circleRadius = 60
numRows = 8
numCols = 5
edgeSpace = 80
rowSpacing = (canvasWidth - (2 * edgeSpace)) / (numCols - 1)
colSpacing = (canvasHeight - (2 * edgeSpace)) / (numRows - 1)
x = 0
y = 0
counter = 0


function setup() {
  createCanvas(canvasWidth,canvasHeight);
  angleMode(DEGREES);

  colorMode(HSB, 255, 255, 255);
  stroke(0,0,250);
  background(200,255,255);
  fill (random(255),255,255)
  //noLoop();
}

function draw() {
	circle(edgeSpace + (x * rowSpacing), edgeSpace + (y*colSpacing), circleRadius);
}

function newCircle(){
	counter++
	var hue = random(255);
	fill(hue,255,255);
	x++
  	if (x >= numCols)
	  	{
		  	x = 0
		  	y++
	  	}
  	if (y >= numRows)
	  	{
	  		y = 0
	  	}
	 if (counter >= numRows * numCols - 1) 
	 	noLoop()	
  
}

setInterval(newCircle,50);


