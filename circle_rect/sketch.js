numLevels = 10
sideLen = undefined;
cnv = undefined;

function setup() {
  colorMode(RGB, 255, 255, 255, 255); //Hue,Saturation,Brightness 
  background(255,255,255) //white background
  stroke(0,200,255,255); // blue stroke
  noFill();

  cnv = createCanvas(windowHeight, windowHeight);
  sideLen = windowHeight
  cnv.position(Math.abs(windowWidth - windowHeight) / 2  , 0);
}

function windowResized() {
  resizeCanvas(windowHeight, windowHeight);
  sideLen = windowHeight
  cnv.position((windowWidth - windowHeight) / 2  , 0);
  background(255,255,255) //white background
}

function draw() {
	strokeWeight(10);
	spacing = sideLen / numLevels / 2;
	for (var x = 1; x <= numLevels*2; x++)
	{
		increment = .5 * x * spacing;
		if ((x % 2) == 1)
		{
			stroke(0,200,255,150); // blue stroke
			rect(increment,increment,sideLen -(x*spacing), sideLen -(x*spacing));
			stroke(255,0,150,150); // pink stroke
			circle(sideLen/2,sideLen/2,sideLen -(x*spacing));
		}	
	}
}