
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paper, ground, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Box(470,535,100,15);
	dustbin2 = new Box(670,535,100,15);
	dustbin3 = new Box(570,577,15,185);
	paper = new Paper(70,570);
	ground = new Ground();
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();
  keyPressed();
  drawSprites();
  //fill('white');
 //text(mouseX+","+mouseY, 100,100);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:2, y:-5});
	}
}

