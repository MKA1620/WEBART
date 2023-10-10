console.log ("hello")

function setup() {
    createCanvas(
        innerWidth, innerHeight
    );
rectMode (CENTER)
}

function draw() {

 background(0, 200, 100);
let red= map(mouseX, 0, width, 0, 255)

fill (
    mouseX, 0, 0)
strokeWeight (1)
    stroke(mouseX, mouseY, 255

    )
rect(mouseX, mouseY, mouseX, mouseY)
//text ("hey", mouseX, mouseY)

}

//an event listener that listens for when the page is resized. If it is do whatever is in the function. 
function windowResized () {
    resizeCanvas (
        innerWidth, innerHeight
    )
}