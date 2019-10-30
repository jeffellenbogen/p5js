// KnobMakerC Example
// Miles DeCoster - CodeForArtists.com

// Create a variable for each instance of a knob or make bunch with an array
var colorKnobR, colorKnobG, colorKnobB;
var radiusKnob;
var donutSize;
var donutHoleSize;
var radiusWindowWidthRatio=.10
var knobSpaceFactor=1.5;
var knobSpaceFromBottomFactor=1.5;
var donutSizeScaleFactor = 1.3;
var donutHoleSizeScaleFactor = .5

function setup() {
  createCanvas(windowWidth, windowHeight); 
  radiusKnob = windowWidth * radiusWindowWidthRatio;
  donutSize = radiusKnob * donutSizeScaleFactor;
  donutHoleSize = donutSize * donutHoleSizeScaleFactor;
  stroke(0,0,0);
  strokeWeight(5);
  background(0);
  fill(255, 255 , 255);
  circle(width/2, height/3,donutSize);
  fill(0);
  circle(width/2, height/3, donutHoleSize);


  colorKnobR = new MakeKnobC("red", radiusKnob, width/2 - radiusKnob * knobSpaceFactor, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, 0, 0,"Red", "white", 16);
  colorKnobG = new MakeKnobC("green", radiusKnob, width/2, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, 0, 0,"Green", "white", 16);
  colorKnobB = new MakeKnobC("blue", radiusKnob, width/2 + radiusKnob * knobSpaceFactor, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, 0, 0,"Blue", "white", 16);
 
  uniqueID = int(10000*Math.random(10000))
  alert = uniqueID
  client = new Paho.MQTT.Client("makerlabPi1", 9001, "colorKnobs.js" + str(uniqueID));
  client.connect({onSuccess:onConnect});
}

function onConnect() {
  //console.log("onConnect");
  //client.subscribe("Knobs");
  message = new Paho.MQTT.Message("Knobs Connected!");
  message.destinationName = "Knobs";
  client.send(message);

  message = new Paho.MQTT.Message(str(int(colorKnobR.knobValue)));
  message.destinationName = "color/red";
  client.send(message);
  message = new Paho.MQTT.Message(str(int(colorKnobG.knobValue)));
  message.destinationName = "color/green";
  client.send(message);
  message = new Paho.MQTT.Message(str(int(colorKnobB.knobValue)));
  message.destinationName = "color/blue";
  client.send(message);  

}

function draw() {
  background(colorKnobR.knobValue,colorKnobG.knobValue,colorKnobB.knobValue); // Use the knob to control something
  colorKnobR.update();
  colorKnobG.update();
  colorKnobB.update();
  strokeWeight(2);
  fill(255 - colorKnobR.knobValue, 255 - colorKnobG.knobValue, 255 - colorKnobB.knobValue );
  circle(width/2,height/3, donutSize);
  fill(colorKnobR.knobValue,colorKnobG.knobValue,colorKnobB.knobValue );
  circle(width/2,height/3, donutHoleSize);  
  textSize(width/20);
  fill(255 - colorKnobR.knobValue, 255 - colorKnobG.knobValue, 255 - colorKnobB.knobValue );
  strokeWeight(3);
  text(int(colorKnobR.knobValue) + " " +int(colorKnobG.knobValue) + " " + int(colorKnobB.knobValue), width/2, height/10);

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
  
  message = new Paho.MQTT.Message(str(int(colorKnobR.knobValue)));
  message.destinationName = "color/red";
  client.send(message);
  message = new Paho.MQTT.Message(str(int(colorKnobG.knobValue)));
  message.destinationName = "color/green";
  client.send(message);
  message = new Paho.MQTT.Message(str(int(colorKnobB.knobValue)));
  message.destinationName = "color/blue";
  client.send(message);  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  radiusKnob = windowWidth * radiusWindowWidthRatio;
  donutSize = radiusKnob * donutSizeScaleFactor;
  donutHoleSize = donutSize * donutHoleSizeScaleFactor;
  colorKnobR = new MakeKnobC("red", radiusKnob, width/2 - radiusKnob*knobSpaceFactor, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, colorKnobR.knobValue, 0,"Red", "white", 16);
  colorKnobG = new MakeKnobC("green", radiusKnob, width/2, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, colorKnobG.knobValue, 0,"Green", "white", 16);
  colorKnobB = new MakeKnobC("blue", radiusKnob, width/2 + radiusKnob * knobSpaceFactor, height - knobSpaceFromBottomFactor * radiusKnob, 0, 255, colorKnobB.knobValue, 0,"Blue", "white", 16);
}


