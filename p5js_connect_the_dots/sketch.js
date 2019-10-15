var canvasWidth = 1400
var canvasHeight = 700
var circleRadius = 50
var numRows = 8
var numCols = 10
var edgeSpace = 70
var rowSpacing = (canvasWidth - (2 * edgeSpace)) / (numCols - 1)
var colSpacing = (canvasHeight - (2 * edgeSpace)) / (numRows - 1)

var counter = 0

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  angleMode(DEGREES);
  noLoop();
}

function drawSpot(x, y) {
  circle(edgeSpace+x*rowSpacing, edgeSpace+y*colSpacing, circleRadius);
}

function draw() {
	var hue = random(100);
	background(200,0,120);
	counter=0;
	for (j = 0; j <= numRows - 1; j++)
	{
		counter++;
		for (i = 0; i <= numCols - 1; i++) //draws each row of circles
		{
			stroke(250,250,250);
			fill(hue,0,100);
			setTimeout(drawSpot(i,j), counter*500 ); //trying to use setTimeout to individually display dots one-at-a-time
			hue=hue+3;
			if (hue >= 255){
				hue = 0;
			}
		}
	}

}


