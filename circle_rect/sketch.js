canvasHeightWidth = 500

numLevels = 8


function setup() {
  createCanvas(canvasHeightWidth,canvasHeightWidth);
  colorMode(RGB, 255, 255, 255, 255); //Hue,Saturation,Brightness 
  background(255,255,255,255) //white background
  stroke(0,200,255,255); // blue stroke
  noFill();
//  fill(0,0,0,0); //white fill w/ no opacity
  strokeWeight(3);

}1

function draw() {
	counter = 0;
	spacing = canvasHeightWidth / numLevels / 2;

	for (var x = 1; x <= numLevels*2; x++)
	{
		increment = .5 * x * spacing;
		if ((x % 2) == 1)
		{
			stroke(0,200,255,255); // blue stroke
			rect(increment,increment,canvasHeightWidth -(x*spacing), canvasHeightWidth -(x*spacing));
			stroke(255,0,150,100); // pink stroke
			circle(canvasHeightWidth/2,canvasHeightWidth/2,canvasHeightWidth -(x*spacing));
		}
		
	}
}