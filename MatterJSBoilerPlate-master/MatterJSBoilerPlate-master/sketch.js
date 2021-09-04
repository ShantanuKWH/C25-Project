const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle, ground, box1, box2, paperImage, dustbinImage;

function preload()
{
  //paperImage = loadImage("paper.png")
  dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.

	
  circle = new Circle(100,610,70)
  ground = new Ground(400,680,800,20)
  box1 = new Box(550,630,100,90)
  Engine.run(engine);
}



function draw() {
  
  background(250);
  circle.display();
  ground.display();
  box1.display();
  
  imageMode(CENTER);
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(circle.body,circle.body.position,{x:85,y:-85})
}
}

