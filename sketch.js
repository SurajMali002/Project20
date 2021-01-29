var Garden;
var cat,catImg1,catImg2,catImg3;
var rat,ratImg1,ratImg2,ratImg3;
function preload() {
    Garden=loadImage("images/garden.png");
   
    catImg1=loadAnimation("images/cat2.png","images/cat3.png");
    catImg2=loadAnimation("images/cat4.png");
    catImg3=loadImage("images/cat1.png");

    ratImg1=loadAnimation("images/mouse2.png","images/mouse3.png");
    ratImg2=loadImage("images/mouse1.png");
    ratImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat=createSprite(800,700,50,50);
    cat.addImage(catImg3);
    cat.scale=0.1;

    rat=createSprite(200,700,50,50);
    rat.addImage(ratImg2);
    rat.scale=0.1;

}

function draw() {
    background(Garden);
   
    if(cat.isTouching(rat)){
     cat.addAnimation("cat stop",catImg2);
     cat.changeAnimation("cat stop");
     cat.velocityX=0;

     rat.addAnimation("rat3",ratImg3);
     rat.changeAnimation("rat3");
    }
     rat.setCollider("circle",0,0,0.2)
    drawSprites();
    
}


function keyPressed(){

 if(keyDown(LEFT_ARROW)){
     cat.velocityX=-5;
     cat.addAnimation("catRunning",catImg1);
     cat.changeAnimation("catRunning");

     rat.addAnimation("ratTeasing",ratImg1);
     rat.changeAnimation("ratTeasing");
 }


}
