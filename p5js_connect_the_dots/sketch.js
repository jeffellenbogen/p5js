var canvasWidth = 1400
var canvasHeight = 700
var circleRadius = 50
var numRows = 8
var numCols = 10
var edgeSpace = 70
var rowSpacing = (canvasWidth - (2 * edgeSpace)) / (numCols - 1)
var colSpacing = (canvasHeight - (2 * edgeSpace)) / (numRows - 1)



function setup() {
  createCanvas(canvasWidth,canvasHeight)
  angleMode(DEGREES)
}

function drawSpot(x, y) {
  circle(edgeSpace+x*rowSpacing, edgeSpace+y*colSpacing, circleRadius)
}

function draw() {
	var hue = 0
	background(200,0,120);

	for (j = 0; j <= numRows - 1; j++)
	{
		for (i = 0; i <= numCols - 1; i++) //draws each row of circles
		{
			stroke(250,250,250);
			fill(hue,0,100);
			drawSpot(i,j);
			hue=hue+3;
			if (hue >= 255){
				hue = 0;
			}
		}
	}
	//noLoop();
}


