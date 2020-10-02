var fixedRect, movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = -5;
  fixedRect.velocityY = 2;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = 5;
  object1 = createSprite(100, 100,50,50);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(200, 200,50,50);
  object2.shapeColor = "green";
  object2.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,object1)){
  movingRect.shapeColor = "blue";
  object1.shapeColor = "blue";

  }
  else{
    movingRect.shapeColor = "green";
    object1.shapeColor = "green";
  
  }
  if(isTouching(movingRect, object2)){
    movingRect.shapeColor = "red";
    object2.shapeColor = "red";
    
    }
  else{
    movingRect.shapeColor = "green";
    object2.shapeColor = "green";
    
  }
  //Calling a function with arguements
  bounceOff(movingRect, fixedRect);
  drawSprites();
}





