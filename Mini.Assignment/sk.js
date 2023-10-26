function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
}

function draw() {
  //background(0, 40, 100);
  let red = map(mouseX, 0, mouseY, 0, 255);

  fill(mouseX, mouseY, mouseX, mouseY);
  strokeWeight(2);
  stroke(mouseX, mouseY, mouseX, mouseY);
  circle(mouseX, mouseY, mouseX, mouseY);
  //text ("hey", mouseX, mouseY)
}

//an event listener that listens for when the page is resized. If it is do whatever is in the function.
function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}
