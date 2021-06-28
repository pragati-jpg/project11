var sea ,seaImg
var ship,shipImg1
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200)
  sea.addImage(seaImg)
  sea.velocityX = -5
  ship = createSprite(130,200,30,30)
  ship.addAnimation("movingship",shipImg1)
  ship.scale = 0.3
}

function draw() {
  background("skyblue");
 

 

//code toreset the background
if(sea.x<0){
  sea.x = sea.width/2;

}
drawSprites()
}
