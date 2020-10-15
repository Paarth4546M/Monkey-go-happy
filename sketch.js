
var monkey , monkey_running;
var banana ,bananaImage, obstacle, c;
var FoodGroup, obstacleGroup;
var score = 0;
var ground;

function preload(){
  
  
 monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400); 
  monkey = createSprite(60,300,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1;

  ground = createSprite(200,340,800,10)
  ground.x = ground.width /2;
  ground.velocityX = -5;
  
score = 0;
}


function draw() {
background("white");
  
text("Survival Time :" + score,270,50);
  
  score = score + Math.round(getFrameRate()/60);

  console.log(getFrameRate())
  
  
  
  if(ground.x <= 0){
    ground.x = ground.width /2;
    ground.velocityX = -5;
  }
  
  
  
  
  monkey.velocityY =  monkey.velocityY + 0.8;
  if(keyDown("space") && monkey.y >= 300){
    monkey.velocityY = -15;
  }
   
  if(frameCount % 300 === 0){
  stone_Maker();
  }
  
  if(frameCount % 80 === 0){
  banana_Maker();
  }
  
  monkey.collide(ground);
  drawSprites(); 
}
function banana_Maker(){
  banana = createSprite(410,200,10,10);
  banana.addImage("fruit",bananaImage);
  banana.y = Math.round(random(140,250));
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.lifetime = 90;
}
function stone_Maker(){
  obstacle = createSprite(370,320,10,10);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5;
  obstacle.lifetime = 90;
}