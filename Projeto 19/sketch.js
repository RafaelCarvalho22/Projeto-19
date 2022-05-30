var bob, bobImg;
var towerImg,tower;
var bom123Img, boma, bomb, bomGroup;
var df, sf;
var score;
var gameState = "play";

function preload(){
towerImg = loadImage("download.jpg");
bobImg = loadImage("o.png");
bom123Img = loadImage("bom.png")
}

function setup() {
createCanvas(600,600);

tower = createSprite(300,300);
tower.addImage(towerImg);
tower.scale = 4;
tower.velocityY = 2;

df = createSprite(50,300,10,700);
sf = createSprite(550,300,10,700);

bob = createSprite(300,100);
bob.addImage(bobImg);
bob.scale = 0.1;
bob.setCollider("rectangle",0,0,500,600);
//bob.debug = true;

bomGroup = new Group();
score = 0
}


function draw() {
  background(200)
  textSize(30)
  text("Sua pontuação: "+ score,180,30);
  
  if (gameState == "play") {

  if(tower.y > 450){
    tower.y = 230
   }
   
  spawnBombs()

  if (keyDown("space")) {
  bob.velocityY = -10;
  }
  bob.velocityY += 0.8;
  if (keyDown("left_arrow")) {
    bob.x += -4;
  }
  if (keyDown("right_arrow")) {
    bob.x += 4;
  }
  bob.collide(df);
  bob.collide(sf);
  
  score = score +1;
  
  drawSprites();

   if (bob.isTouching(bomGroup) || bob.y > 600) {
  
    bob.destroy();
    gameState = "end";
   }  
  }
  
  if (gameState == "end") {
   fill("blue");
   textSize(30);
   text("Fim de jogo",230,250);
  }
 }

function spawnBombs() {

 if (frameCount % 50 == 0) {
 var boma = createSprite(166,10)
 boma.addImage(bom123Img);
 boma.velocityY = 8;
 boma.x = Math.round(random(166, 498));
 boma.scale = 0.2;
 boma.setCollider("rectangle",0,0,300,300);
 //boma.debug = true;
 boma.lifetime = 600;
 bomGroup.add(boma);
 }
 if (frameCount % 200 == 0) {
  var bomb = createSprite(166,10)
  bomb.addImage(bom123Img);
  bomb.velocityY = 12;
  bomb.collide(df);
  bomb.collide(sf);
  bomb.x = Math.round(random(166, 498));
  bomb.scale = 0.2;
  bomb.setCollider("rectangle",0,0,300,300);
  //bomb.debug = true;
  bomb.lifetime = 600;
  bomGroup.add(bomb);
  }
}



















