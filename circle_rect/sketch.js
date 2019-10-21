//numLevels = 10
sideLen = undefined;
cnv = undefined;
spacing = undefined;
numLevels = undefined;
tempLevels = undefined;
edgeBuffer = 50;

function setup() {
  colorMode(RGB, 255, 255, 255, 255); //Hue,Saturation,Brightness 
  background(255,255,255) //white background
  stroke(0,200,255,255); // blue stroke
  noFill();
  textSize(15);

  cnv = createCanvas(windowHeight, windowHeight - edgeBuffer);
  sideLen = windowHeight - edgeBuffer;
  cnv.position(Math.abs(windowWidth - sideLen) / 2 , 0);

  numLevelsSlider = createSlider(4, 20, 8);
  numLevelsSlider.position(windowWidth/ 2 - edgeBuffer, windowHeight- edgeBuffer);
  numLevels = numLevelsSlider.value()
  text('numLevels', numLevelsSlider.x * 2 + numLevelsSlider.width, numLevelsSlider.y + 2);
}

function windowResized() {
  resizeCanvas(windowHeight, windowHeight - edgeBuffer);
  sideLen = windowHeight - edgeBuffer
  cnv.position(Math.abs(windowWidth - sideLen) / 2 , 0);
  background(255,255,255) //white background
  numLevelsSlider.position(windowWidth/ 2 - edgeBuffer, windowHeight- edgeBuffer);
  text('numLevels', numLevelsSlider.x * 2 + numLevelsSlider.width, numLevelsSlider.y + 2);

}

function draw() {
	//noFill();
	strokeWeight(3);
	tempLevels = numLevelsSlider.value();
	if (tempLevels != numLevels){
		numLevels = tempLevels;
		clear();
	}
	spacing = sideLen / numLevels/ 2;
	for (var x = 1; x <= numLevels*2; x++)
	{
		increment = .5 * x * spacing;
		if ((x % 2) == 1)
		{
			stroke(0,200,255,150); // blue stroke
			rect(increment,increment,sideLen - (x*spacing), sideLen -(x*spacing));
			stroke(255,0,150,150); // pink stroke
			circle(sideLen/2,sideLen/2,sideLen - (x*spacing));
		}	
	}
}