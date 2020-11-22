var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  car = createSprite(200,100,80,80);
  car.shapeColor = "orange";
  car.velocityX = 4;
  

  wall = createSprite(700,100,40,110);
  wall.shapeColor = "orange";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,wall)){
    car.shapeColor = "red";
    wall.shapeColor = "purple";
  }
collide(car,wall);
  
  drawSprites();
}
