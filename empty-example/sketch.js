function setup() {
  createCanvas(1200,600);
}

function draw() {
  if (mouseIsPressed) {
  	fill(0);
  }
  else {
  	fill(255);
  }
  ellipse(mouseX, mouseY, 40,80);

}