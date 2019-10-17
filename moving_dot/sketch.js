canvasWidth = 1400
canvasHeight = 700
circleRadius = 50
circleDelta = 5
xLocation = 0
xDelta = 10
backgroundHUE = 0
hue = 0

//mainSpot = circle(xLocation,height/2, circleRadius);

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  angleMode(DEGREES);
  colorMode(HSB, 255, 255, 255);
  backgroundHUE = random(255)
  hue = random(255)
  //noLoop();
  background(backgroundHUE,255,255)

}


function draw() {
	//background(backgroundHUE,255,255) // comment this statement out and uncomment line 19 to continuously draw new circles
	fill(hue,255,255)
	circle(xLocation,mouseY, circleRadius);

	if ((xLocation > width) || (xLocation < 0))
		xDelta = -xDelta
	xLocation = xLocation + xDelta

	if ((circleRadius > 100) || (circleRadius < 10))
		circleDelta = -circleDelta
	circleRadius = circleRadius + circleDelta
	

}


