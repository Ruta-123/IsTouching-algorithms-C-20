var fixed 
var moving

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(400, 200, 50, 50);
fixed.debug=true
moving.debug= true
}


function draw() {
  background(0); 
  moving.x=mouseX
  moving.y=mouseY 


  if (fixed.x-moving.x<fixed.width/2+moving.width/2 
    && moving.x-fixed.x<fixed.width/2+moving.width/2
    && fixed.y-moving.y<fixed.height/2+moving.height/2 
    && moving.y-fixed.y<fixed.height/2+moving.height/2){
 fixed.shapeColor = "pink"
 moving.shapeColor = "pink"

  }
  else {
    fixed.shapeColor = "blue"
    moving.shapeColor = "blue"
  }
  drawSprites();
}