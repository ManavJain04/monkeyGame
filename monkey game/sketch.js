
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();

  
}


function draw() {
  background(255);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.round(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
if(keyDown("space")){
  monkey.velocityY=-12;
}
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  food();
  obstacle();
  drawSprites();
}


function food(){
  if(frameCount%80===0){
   var  banana=createSprite(600,350,40,10);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-7;
    banana.scale=0.1;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
}

function obstacle(){
  
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,130,10,40);
     
   obstacle.addImage( obstaceImage);
   obstacle.velocityX =-7; 
   obstacle.scale=0.1;
   obstacle.y=Math.round(random(325,326));
   obstacle.lifetime = 300;
   obstaclesGroup.add(obstacle);
  
   
   
   
 }
}
