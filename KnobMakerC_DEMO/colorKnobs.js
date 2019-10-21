// KnobMakerC Example
// Miles DeCoster - CodeForArtists.com

// Create a variable for each instance of a knob or make bunch with an array
var colorKnob;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(0);
  // example values
  colorKnobR = new MakeKnobC("red", 100, width/2-200, height*.7, 0, 255, 0, 0,"Red", "white", 16);
  colorKnobG = new MakeKnobC("green", 100, width/2, height*.7, 0, 255, 0, 0,"Green", "white", 16);
  colorKnobB = new MakeKnobC("blue", 100, width/2+200, height*.7, 0, 255, 0, 0,"Blue", "white", 16);

}

function draw() {
  background(colorKnobR.knobValue,colorKnobG.knobValue,colorKnobB.knobValue); // Use the knob to control something
  colorKnobR.update();
  colorKnobG.update();
  colorKnobB.update();
}

function mousePressed() { 
	colorKnobR.active(); 
	colorKnobG.active(); 
	colorKnobB.active(); 
}

function mouseReleased() {
	colorKnobR.inactive(); 
	colorKnobG.inactive(); 
	colorKnobB.inactive(); 
}