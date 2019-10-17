canvasWidth = 1400
canvasHeight = 700

circleRadius = 180
radiusReducer = 0

numRows = 5
numCols = 7
edgeSpace = circleRadius*3/4
rowSpacing = (canvasWidth - (2 * edgeSpace)) / (numCols - 1)
colSpacing = (canvasHeight - (2 * edgeSpace)) / (numRows - 1)
x = 0
//xDrift = 0
y = 0

counter = 0
totalLoops = 0
maxLoops = 50


hue = 0


function setup() 
{
	hue = random(255)
	createCanvas(canvasWidth,canvasHeight);
	angleMode(DEGREES);

	colorMode(HSB, 255, 255, 255);
	background(255-hue,255,130);
	stroke(0,0,255);
	fill (hue,255,255)
	//noLoop();
}

function draw() 
{
	fill(hue,255,255);
	circle(edgeSpace + (x * rowSpacing), edgeSpace + (y * colSpacing), circleRadius - radiusReducer );
}

function newCircle(){
	
	counter++
	x++
  	
  	if (x >= numCols) // resets the x when dots move too far right
	  	{
		  	hue = random(255);
			x = 0
			y++
			if (y >= numRows) // resets the y when dots move too far down
	  		{
		  		y = 0
		  		totalLoops++ // tracks times through drawing ALL dots
		  		radiusReducer+=round(circleRadius/10)
		  		if (radiusReducer>circleRadius)
		  		{
		  			radiusReducer=0
		  		}
	  		}
	  	}
  	
	if (counter >= numRows * numCols - 1)  // tracks dots drawn in all rows * columns once through
	 	{
	 	
	 	if (totalLoops >= maxLoops)	// tracks total loops through whole pattern
	 		{
		 		counter = 0
		 		noLoop()	// stops draw from looping
	 		}
		}  
}

setInterval(newCircle,18); // draws the next circle based on current values of variables set throughout the program at an interval




