numLevels = 8
sideLen = undefined;
sideLenInc = 50;
cnv = undefined;

function setup() {

  colorMode(RGB, 255, 255, 255, 255); //Hue,Saturation,Brightness 
  background(255,255,255) //white background
  stroke(0,200,255,255); // blue stroke
  noFill();
  strokeWeight(3);
  cnv = createCanvas(windowHeight, windowHeight);
  sideLen = floor(windowHeight/sideLenInc)*sideLenInc;
  cnv.position((windowWidth - windowHeight) / 2  , 0);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  sideLen = floor(windowHeight/sideLenInc)*sideLenInc;
  cnv.position((windowWidth - windowHeight) / 2  , 0);
  background(255,255,255) //white background
}

function draw() {
	strokeWeight(3);
	spacing = windowWidth / numLevels / 2;

	for (var x = 1; x <= numLevels*2; x++)
	{
		increment = .5 * x * spacing;
		if ((x % 2) == 1)
		{
			stroke(0,200,255,255); // blue stroke
			rect(increment,increment,sideLen -(x*spacing), sideLen -(x*spacing));
			stroke(255,0,150,100); // pink stroke
			circle(sideLen/2,sideLen/2,sideLen -(x*spacing));
		}
		
	}
}