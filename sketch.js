//declaring global variables
var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  //creating a canvas
  createCanvas(1600,400);
  
  //defining the speed variable
  speed = random(223, 321);

  //defining the weight variable
  weight = random(30, 52);

  //defining the thickness variable
  thickness = random(22, 83);

  //creating a bullet sprite
  bullet = createSprite(70, 200, 10, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  //creating a wall sprite
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  wall.depth = bullet.depth;
  bullet.depth = bullet.depth + 1;

}

function draw() {
  //defining a background colour
  background("black");  

  hasCollided(bullet, wall);

  //checking collision
  if(hasCollided(bullet, wall))
  {
    //setting the bullet velocity to 0
    bullet.velocityX = 0;

    //calculating the damage to the wall
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    //determing the color of the wall according to the damage 
    if(damage <= 10) {
      wall.shapeColor = "green";
    }
    else if(damage > 10 ) {
      wall.shapeColor = "red";
    }
      
  }

  drawSprites();
}

function hasCollided(object1, object2){
  bulletRightEdge = object1.x + object1.width;
  wallLeftEdge = object2.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}