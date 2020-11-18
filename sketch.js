var PLAY=1;
var END=0;
var gameState=1


var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

var score2

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(450,450);

  //create monkey
  monkey = createSprite(125,350,20,20);
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.1
  
  //create ground12 
  ground = createSprite(225,385,650,10);
  ground.x = ground.width /2;
  
  FoodGroup=createGroup();
  ObstacleGroup=createGroup();
  
  score = 0;
  score2 = 0;
}


function draw() {
  //monkey.debug = true;
  background(300);
  stroke("Black")
  textSize(20)
  fill("Black")
  text("score: "+ score, 350, 50);
  
  stroke("Black")
  textSize(20)
  fill("Black")
  score2=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ score2, 50, 50);
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+1;
  }
  
  if(keyDown("space") && monkey.y >= 340){
    monkey.velocityY = -14; 
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  SpawnFood();
  SpawnObstacle();
  drawSprites();
}

function SpawnObstacle(){
  if(frameCount % 300===0){
     obstacle=createSprite(450,350,20,20);
     obstacle.addImage(obstacleImage)
     obstacle.scale = 0.2
     obstacle.velocityX = -6;
    
     obstacle.setLifetimeEach = 150;
    
     ObstacleGroup.add(obstacle)
     }
}

function SpawnFood(){
  if(frameCount % 80===0){
     banana=createSprite(450,225,20,20);
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.y=Math.round(random(220,300));
     banana.velocityX = -6;
    
    
     FoodGroup.add(banana);
     }
}


