var backGround;
var tom;
var mouse ;

function preload() {
    //load the images here
    backGroundImage=loadImage("images/garden.png");
    tomImage=loadImage("images/cat1.png");
    tom2Image=loadImage("images/cat2.png");
    tom3Image=loadImage("images/cat3.png");
    tom4Image=loadImage("images/cat4.png");

    mouseImage=loadImage("images/mouse1.png");
    mouse2Image=loadAnimation("images/mouse2.png");
    mouse3Image=loadImage("images/mouse3.png");;
    mouse4Image=loadImage("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(700,600,50,50);
    tom.addImage(tomImage);
    tom.velocityX=-5;
    tom.scale=0.2

    mouse=createSprite(300,600.50,50);
    mouse.addImage(mouseImage);
    mouse.velocityX=5;
    mouse.scale=0.2
 

}

function draw() {

    background(backGroundImage);
    //Write condition here to evalute if tom and jerry collide
    if(mouse.x-tom.x<=mouse.width/2+tom.width/2
      &&tom.x-mouse.x<=mouse.width/2+tom.width/2){
        mouse.addAnimation("mouse2Image")
      }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse2Image);
    // mouse.changeAnimaton("mouseTeasing");
    mouse.frameDelay=25;
  }



}
