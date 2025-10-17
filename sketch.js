var x = 0;
var y = 0;
var canvas; 


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cuerpo");
  canvas.position(0,0);
  canvas.style('z-index','-1');
  noStroke();
  frameRate(25);
}

function draw() {
  colorMode(HSB,359,100,100)
  background(map(mouseX, 0, windowWidth, 0, 359), 100, map(mouseY, 0, windowWidth, 50, 100)); 
  x = lerp(x, mouseX, 1.1); 
  y = lerp(y, mouseY, 1.1);
  fill("white");
  textSize(random(100,200));
  text("☁️",x,y);
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
