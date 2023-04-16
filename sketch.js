var bg,back
var doggo, doggoImage
var edges
var butterflies, butterflee, butterfliesGroup
var wolf, wolfImage
var wolfGroup
var doggostop

function preload(){

  doggoImage=loadAnimation("gs1.png","gs2.png","gs3.png","gs4.png");
  bg=loadImage("parkyaya.jpeg")
  wolfImage=loadImage("wolf.png")
  doggostop=loadAnimation("gs4.png")
  butterflies=loadAnimation("butter1.jpeg","butter2.jpeg")
}


function setup(){

createCanvas(900,400)
back=createSprite(600,35)
back.addImage(bg)
back.scale=1.3
doggo=createSprite(140,400,20,20)
doggo.addAnimation("running",doggoImage)
doggo.scale=0.8
edges=createEdgeSprites();
wolfGroup=new Group()
butterfliesGroup=new Group();
doggo.debug=true
doggo.setCollider('rectangle',0,0,230,230)
}

function draw(){
console.log(doggo.y)
background(0)
back.velocityX=-2
if (back.x<0){

  back.x=400
}

if (keyIsDown(UP_ARROW))
{
 

  doggo.velocityY=-10
}
doggo.velocityY=doggo.velocityY+0.8
doggo.collide(edges)

createWolf()
createButterfly()

if (wolfGroup.isTouching(doggo)){

  doggo.velocityX=0
  back.velocityX=0
  wolfGroup.setVelocityXEach(0)
  doggo.changeAnimation('stop',doggostop)
  wolfGroup.destroyEach()
  
}

drawSprites()
}


function createButterfly(){



  if (frameCount%200===0){
  butterflee=createSprite(950,random(10,300),20,20)
  butterflee.addAnimation("flying",butterflies)
  butterflee.scale=3.7
  butterflee.velocityX=-2
  butterflee.lifetime=2000
  butterfliesGroup.add(butterflee)
  butterflee.debug=true
  }
  }

function createWolf(){



if (frameCount%300===0){
wolf=createSprite(950,300,20,20)
wolf.addImage (wolfImage)
wolf.scale=0.6
wolf.velocityX=-2
wolf.lifetime=2000
wolfGroup.add(wolf)
wolf.debug=true
wolf.setCollider('rectangle',0,0,230,200)
}
}