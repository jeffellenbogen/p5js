// KnobMakerC Example
// Miles DeCoster - CodeForArtists.com


// Create a variable for each instance of a knob or make bunch with an array
var colorKnobR, colorKnobG, colorKnobB;
var radiusKnob;
var donutSize;
var donutHoleSize;
var radiusWindowWidthRatio=.15;
var knobSpaceFactor=1.5;
var knobSpaceFromBottomFactor=2;
var donutSizeScaleFactor = 2;
var donutHoleSizeScaleFactor = .3;
var donutStretchRatio = .7;


function setup() {
  createCanvas(windowWidth, windowHeight); 
  radiusKnob = windowWidth * radiusWindowWidthRatio;
  donutSize = radiusKnob * donutSizeScaleFactor;
  donutHoleSize = donutSize * donutHoleSizeScaleFactor;
  stroke(0,0,0);
  strokeWeight(4);
  background(255);
  
  fill(0);
  ellipse(width/2, height*.35, donutSize, donutSize * donutStretchRatio);
  fill(255);
  ellipse(width/2, height*.35, donutHoleSize, donutHoleSize * donutStretchRatio);


  colorKnobR = new MakeKnobC([255,0,0], radiusKnob, width/2 - radiusKnob * knobSpaceFactor, height - 150, 0, 255, 0, 0,"Red", "white", 16);
  colorKnobG = new MakeKnobC([0,255,0], radiusKnob, width/2, height - 150, 0, 255, 0, 0,"Green", "white", 16);
  colorKnobB = new MakeKnobC([0,0,255], radiusKnob, width/2 + radiusKnob * knobSpaceFactor, height - 150, 0, 255, 0, 0,"Blue", "white", 16);
 

  uniqueID = int(10000*Math.random(10000))
  alert = uniqueID
  client = new Paho.MQTT.Client("makerlabPi1", 9001, "colorKnobs.js" + str(uniqueID));
  client.onMessageArrived = onMessageArrived;
  client.connect({onSuccess:onConnect});
}


function onConnect() {
  console.log("onConnect");
  client.subscribe("color/#");


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

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.destinationName+ " " +message.payloadString);
  if (message.destinationName == "color/red")
  {  
    colorKnobR.knobValue = int(message.payloadString)
    console.log("setRed to " + message.payloadString)
  }
  else if (message.destinationName == "color/green")
    colorKnobG.knobValue = int(message.payloadString)
  else if (message.destinationName == "color/blue")
    colorKnobB.knobValue = int(message.payloadString)

  colorKnobR.update();
  colorKnobG.update();
  colorKnobB.update();

}

function draw() {
  background(255-colorKnobR.knobValue,255-colorKnobG.knobValue,255-colorKnobB.knobValue); // Use the knob to control something
  colorKnobR.update();
  colorKnobG.update();
  colorKnobB.update();
  strokeWeight(4);

  donutColor = [colorKnobR.knobValue,colorKnobG.knobValue,colorKnobB.knobValue];
  backgndColor = [255 - colorKnobR.knobValue, 255 - colorKnobG.knobValue, 255 - colorKnobB.knobValue ]
  fill(donutColor);
  ellipse(width/2, height*.35, donutSize, donutSize * donutStretchRatio);
  fill(backgndColor);
  ellipse(width/2, height*.35, donutHoleSize, donutHoleSize * donutStretchRatio);

  textSize(40);
  fill(colorKnobR.knobValue,colorKnobG.knobValue,colorKnobB.knobValue );
  strokeWeight(3);
  stroke(255);
  text(int(colorKnobR.knobValue) + " " +int(colorKnobG.knobValue) + " " + int(colorKnobB.knobValue), width/2, 40);
  stroke(0);
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
  colorKnobR = new MakeKnobC([255,0,0], radiusKnob, width/2 - radiusKnob*knobSpaceFactor, height - 150, 0, 255, colorKnobR.knobValue, 0,"Red", "white", 16);
  colorKnobG = new MakeKnobC([0,255,0], radiusKnob, width/2, height - 150, 0, 255, colorKnobG.knobValue, 0,"Green", "white", 16);
  colorKnobB = new MakeKnobC([0,0,255], radiusKnob, width/2 + radiusKnob * knobSpaceFactor, height - 150, 0, 255, colorKnobB.knobValue, 0,"Blue", "white", 16);
}


