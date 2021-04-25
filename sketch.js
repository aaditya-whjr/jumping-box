var canvas;
var music;
var ball;
var surface1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1550,750);
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor="white";
    ball.velocityX=4;
    ball.velocityY=4;


    surface1=createSprite(150,700,200,30);
    surface1.shapeColor="green";

    surface2=createSprite(450,700,200,30);
    surface2.shapeColor="red";

    surface3=createSprite(750,700,200,30);
    surface3.shapeColor="orange";

    surface4=createSprite(1100,700,200,30);
    surface4.shapeColor="black";

    surface5=createSprite(1400,700,200,30);
    surface5.shapeColor="blue";
}

function draw() {
    background(rgb(169,169,169));
    
   edges=createEdgeSprites();

   ball.bounceOff(edges);

   if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
     ball.shapeColor="green";
     music.play;
   }

   if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
    ball.shapeColor="red";
    music.stop;
  }

  if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
    ball.shapeColor="orange";
    music.play;
    ball.velocityX=0;
    ball.velocityY=0;
  }

  if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
    ball.shapeColor="black";
    music.play;
    ball.velocityX=6;
    ball.velocityY=6;
  }

  if(surface5.isTouching(ball) && ball.bounceOff(surface5)){
    ball.shapeColor="blue";
    music.stop;
    ball.velocityX=0;
    ball.velocityY=0;
  }

  drawSprites();
}
