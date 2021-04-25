var tom;
var jerry;
var bgImg;
var tomimg1,tomimg2,tomimg3;
var jerryimg1,jerryimg2,jerryimg3;

function preload() {
    bgImg=loadImage("images/garden.png");

    tomimg1=loadAnimation("Images/cat1.png");
    tomimg2=loadAnimation("Images/cat2.png","Images/cat3.png");
    tomimg3=loadAnimation("Images/cat4.png");

    jerryimg1=loadAnimation("Images/mouse1.png");
    jerryimg2=loadAnimation("Images/mouse2.png","Images/mouse3.png");
    jerryimg3=loadAnimation("Images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
     tom = createSprite(870,600);
     tom.addAnimation("tomSleeping",tomimg1);
     tom.scale=0.2;

     jerry = createSprite(200,600);
     jerry.addAnimation("jerryStanding",jerryimg1);
     jerry.scale=0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
        tom.velocityX=0;
        tom.addAnimation("tomlastimg",tomimg3);
        tom.x300
        tom.scale=0.2;
        tom.changeAnimation("tomlastimg");
        
        jerry.addAnimation("jerrylastimg",jerryimg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerrylastimg");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX=-5;
    tom.frameDelay;
    tom.addAnimation("tomrunningimg",tomimg2);
    tom.changeAnimation("tomrunningimg");


    jerry.addAnimation("jerryteasingimg",jerryimg2);
    jerry.frameDelay=25;
    jerry.changeAnimation("jerryteasingimg");
    
  }

  if(keyCode === RIGHT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomrunningimg",tomimg2);
    tom.changeAnimation("tomrunningimg");
    tom.frameDelay=25;


    jerry.addAnimation("jerryteasingimg",jerryimg2);
    jerry.frameDelay=25;
    jerry.changeAnimation("jerryteasingimg");
    
  }
  
}
