// KnobMakerC Example
// Miles DeCoster - CodeForArtists.com

// Create a variable for each instance of a knob or make bunch with an array
var colorKnobR, colorKnobG, colorKnobB;
var radiusKnob;
var radiusWindowWidthRatio=.15
var knobSpaceFactor=1.5;
var knobSpaceFromBottomFactor=1;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(0);
  radiusKnob = windowWidth * radiusWindowWidthRatio;
  // example values
  colorKnobR = new MakeKnobC("red", radiusKnob, width/2 - radiusKnob * knobSpaceFactor, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, 0, 0,"Red", "white", 16);
  colorKnobG = new MakeKnobC("green", radiusKnob, width/2, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, 0, 0,"Green", "white", 16);
  colorKnobB = new MakeKnobC("blue", radiusKnob, width/2 + radiusKnob * knobSpaceFactor, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, 0, 0,"Blue", "white", 16);
}

function draw() {
  background(colorKnobR.knobValue,colorKnobG.knobValue,colorKnobB.knobValue); // Use the knob to control something
  colorKnobR.update();
  colorKnobG.update();
  colorKnobB.update();
  textSize(width/10);
  fill(255 - int(colorKnobR.knobValue + colorKnobG.knobValue + colorKnobB.knobValue)/3);

  text(int(colorKnobR.knobValue) + " " +int(colorKnobG.knobValue) + " " + int(colorKnobB.knobValue), width/2, height/5)
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  radiusKnob = windowWidth * radiusWindowWidthRatio;
  colorKnobR = new MakeKnobC("red", radiusKnob, width/2 - radiusKnob*knobSpaceFactor, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, colorKnobR.knobValue, 0,"Red", "white", 16);
  colorKnobG = new MakeKnobC("green", radiusKnob, width/2, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, colorKnobG.knobValue, 0,"Green", "white", 16);
  colorKnobB = new MakeKnobC("blue", radiusKnob, width/2 + radiusKnob * knobSpaceFactor, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, colorKnobB.knobValue, 0,"Blue", "white", 16);

}
