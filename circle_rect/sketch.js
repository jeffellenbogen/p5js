
var sideLen;
var cnv;
var spacing;
var numLevels;
var numLevelsMin=2;
var numLevelsMax=20;
var numLevelsSliderStart = 10;
var tempLevels;
var edgeBuffer = 50;
var sidebarBufferWidth = 200;


var mainBuffer;
var sidebarBuffer;

function setup() {
  colorMode(RGB, 255, 255, 255, 255); //Hue,Saturation,Brightness 

  createCanvas(windowWidth, windowHeight);
  mainBuffer = createGraphics(windowWidth - sidebarBufferWidth, windowHeight);
  sidebarBuffer = createGraphics(sidebarBufferWidth, windowHeight);

  sideLen = windowHeight - edgeBuffer;
  numLevelsSlider = createSlider(numLevelsMin, numLevelsMax, numLevelsSliderStart);
  numLevels = numLevelsSliderStart;
  noFill();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  sideLen = windowHeight - edgeBuffer
  mainBuffer.fill(255);
  mainBuffer.stroke(255); 
  mainBuffer.rect(0,0,windowWidth- sidebarBufferWidth , windowHeight)
}

function draw() {
  drawSidebarBuffer();
  drawMainBuffer();
  image(sidebarBuffer,0,0);
  image(mainBuffer,sidebarBufferWidth,0);
  numLevelsSlider.position(35, 25);
  numLevels = numLevelsSlider.value();
}

function drawMainBuffer() {
  mainBuffer.strokeWeight(4);
	tempLevels = numLevelsSlider.value();
	if (tempLevels != numLevels){
		numLevels = tempLevels;
    mainBuffer.fill(255);
    mainBuffer.stroke(255); 
    mainBuffer.rect(0,0,sideLen, sideLen)
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

  sidebarBuffer.stroke(0,200,255);
  sidebarBuffer.strokeWeight(3);
  sidebarBuffer.textSize(15);
  sidebarBuffer.text(numLevelsMin + "   numLevels     " + numLevelsMax,35,60);

  sidebarBuffer.stroke(255,0,150);
  sidebarBuffer.strokeWeight(4);
  sidebarBuffer.textSize(20);
  sidebarBuffer.text("NumLevels = " + numLevels,35,120); 

}