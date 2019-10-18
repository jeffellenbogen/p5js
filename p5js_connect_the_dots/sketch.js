canvasWidth = 1400
canvasHeight = 700

circleRadius = 200
radiusReducer = 0

numRows = 3
numCols = 5

edgeSpace = 1
rowSpacing = 1
colSpacing = 1

edgeSpace = circleRadius*7/8
rowSpacing = (canvasWidth - (2 * edgeSpace)) / (numCols - 1)
colSpacing = (canvasHeight - (2 * edgeSpace)) / (numRows - 1)
x = 0
//xDrift = 0
y = 0

counter = 1
totalLoops = 0 // loop counter, starts at zero loops completed
maxLoops = 7 // max num of loops through whole pattern


hue = 0
alphaFill=150


function setup() 
{
	hue = random(255)
	createCanvas(canvasWidth,canvasHeight);
	angleMode(DEGREES);

	colorMode(HSB, 255, 255, 255, 255); //Hue,Saturation,Brightness Model, Alpha
	background(255,255,0) //black background

	//background(255-hue,255,255); random background
	stroke(0,0,255);
	fill (hue,255,255,alphaFill)
	//noLoop();
}

function draw() 
{
	fill(hue,255,255, 150);
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
		 		counter = 1
		 		noLoop()	// stops draw from looping
	 		}
		}  
}



setInterval(newCircle,20); // draws the next circle based on current values of variables set throughout the program at an interval


