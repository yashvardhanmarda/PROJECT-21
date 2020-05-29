var wall,thickness;
var bullet,speed,weight;




function setup() {
  createCanvas(1200,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(800,200,thickness,height/2);
  wall.shapeColor= "green";
  bullet.velocityX = 5;
  bullet.shapeColor = "white";

}

function draw() {
  background("black"); 
  if(wall.x-bullet.x<=wall.width/2+bullet.width/2)
  {
  var damage=(0.5* weight* speed* speed) /(thickness*thickness*thickness);
  
      if(damage>10)
      {
      wall.shapeColor="blue";
      }

      else if(damage<10)
      {
      wall.shapeColor="red";
      }

      
      
      
}
  drawSprites();
}