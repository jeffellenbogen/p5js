//numLevels = 10
sideLen = undefined;
cnv = undefined;
spacing = undefined;
var numLevels;
var numLevelsMin=2;
var numLevelsMax=20;
var numLevelsSliderStart = 10;
tempLevels = undefined;
edgeBuffer = 50;


var mainBuffer;
var sidebarBuffer;

function setup() {
  colorMode(RGB, 255, 255, 255, 255); //Hue,Saturation,Brightness 
//    background(255,255,255, 255) //white background
  stroke(0,200,255,255); // blue stroke

  createCanvas(windowWidth, windowHeight);
  mainBuffer = createGraphics(windowWidth * .8, windowHeight);
  sidebarBuffer = createGraphics(windowWidth * .2, windowHeight);

  sideLen = windowHeight - edgeBuffer;
  numLevelsSlider = createSlider(numLevelsMin, numLevelsMax, numLevelsSliderStart);

  noFill();
}

/*
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  sideLen = windowHeight - edgeBuffer
  cnv.position(Math.abs(windowWidth - sideLen) / 2 , 0);
  background(255,255,255) //white background
  //numLevelsSlider.position(windowWidth/ 2 - edgeBuffer, windowHeight- edgeBuffer);
  //text('numLevels', numLevelsSlider.x * 2 + numLevelsSlider.width, numLevelsSlider.y + 2);
  fill(0);
  numLevelsSlider.position(100, 100);
  text('Gato', 100, 130);
  noFill();
}
*/

function draw() {
  drawSidebarBuffer();
  drawMainBuffer();
  image(sidebarBuffer,0,0);
  image(mainBuffer,windowWidth * .2,0);
}

function drawMainBuffer() {
  mainBuffer.fill(255,255,0 , 255);
  mainBuffer.rect(0,0,sideLen, sidebarBuffer)
	mainBuffer.clear();
  mainBuffer.strokeWeight(5);
	tempLevels = numLevelsSlider.value();
	if (tempLevels != numLevels){
		numLevels = tempLevels;
		mainBuffer.clear();
    mainBuffer.stroke(255,255,0, 255);
    mainBuffer.rect(0,0,sideLen, sidebarBuffer)
	}
	spacing = sideLen / numLevels/ 2;
	for (var x = 1; x <= numLevels*2; x++)
	{
		increment = .5 * x * spacing;
		if ((x % 2) == 1)
		{
      mainBuffer.noFill();
			mainBuffer.stroke(0,200,255,150); // blue stroke
			mainBuffer.rect(increment,increment,sideLen - (x*spacing), sideLen -(x*spacing));
			mainBuffer.stroke(255,0,150,150); // pink stroke
			mainBuffer.circle(sideLen/2,sideLen/2,sideLen - (x*spacing));
		}	
	}
}

function drawSidebarBuffer(){
  sidebarBuffer.stroke(255,255,0);
  sidebarBuffer.strokeWeight(3);
  sidebarBuffer.textSize(15);
  sidebarBuffer.fill(0);
  numLevelsSlider.position(25, 25);
  sidebarBuffer.text(numLevelsMin + "   numLevels     " + numLevelsMax,25,60);
  numLevels = numLevelsSlider.value();
}