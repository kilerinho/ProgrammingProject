var cnv;
var d;
var g;
function setup() {
  cnv = createCanvas(800, 800);
  cnv.mousePressed(changeGray); 
  d = 10;
  g = 100;
}

function draw() {
  background(g);
  ellipse(width/2, height/2, d, d);
}

// change size of ellipse while clicked on canvas
function mousePressed() {
  d = d * 1.5;
}

// change gray when cilcked on canvas
function changeGray() {
  g = random(0, 255);
}