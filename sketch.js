var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground1,box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("Images/helicopter.png")
	packageIMG=loadImage("Images/package.png")
}

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

    ground = Bodies.rectangle(width/2, 680, width, 20 , {isStatic:true} ); 
	World.add(world, ground);

    box1= new Box(270,630,20,100);
	box2=new Box(490,630,20,100);
	box3=new Box(380,660,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.display();
  box2.display();
  box3.display();

  fill("white")
  rect(width/2, 680, width, 20 )

  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody,false)
    
  }
}



