var canvasWidth = 1400
var canvasHeight = 700
var circleRadius = 100
var numRows = 5
var numCols = 6
var edgeSpace = 80
var rowSpacing = (canvasWidth - (2 * edgeSpace)) / (numCols - 1)
var colSpacing = (canvasHeight - (2 * edgeSpace)) / (numRows - 1)

var counter = 0

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  angleMode(DEGREES);
  noLoop();
  colorMode(HSB, 255, 255, 255);
}

function drawDelay(x,y) {
	setInterval(drawSpot(x,y),1000);
}

function drawSpot(x, y) {
  circle(edgeSpace+x*rowSpacing, edgeSpace+y*colSpacing, circleRadius);
}

function draw() {
	var hue = random(100);
	background(200,0,120);
	
	for (j = 0; j <= numRows - 1; j++)
	{
		
		for (i = 0; i <= numCols - 1; i++) //draws each row of circles
		{
			stroke(0,0,250);
			fill(hue,255,255);
			drawDelay(i,j); //trying to use setTimeout to individually display dots one-at-a-time
			hue=hue+4;
			if (hue >= 255)
			{
				hue = 0;
			}
		}
	}

}


