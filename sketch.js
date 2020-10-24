
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;




function preload()
{
	paperImage=loadImage("paper.png");
	dustbinImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	//paper=createSprite(100,680,20,20);
	//dustbin=createSprite(500,680,70,20);
	//dustbin2=createSprite(470,655,20,70);
	//dustbin3=createSprite(540,655,20,70);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=Matter.Bodies.circle(100,56, 40) 
	World.add(world,paper);	
	Engine.run(engine);
	Ground=Matter.Bodies.rectangle (400,685, 800, 10,{isStatic:true})
	World.add(world,Ground);

	dustbin=Matter.Bodies.rectangle (680,680,70,20, {isStatic:true})
	World.add(world,dustbin);
	dustbin2=Matter.Bodies.rectangle (650,655,20,70, {isStatic:true})
	World.add(world,dustbin2);
	dustbin3=Matter.Bodies.rectangle (720,655,20,70, {isStatic:true})
	World.add(world,dustbin3);
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  imageMode(RADIUS);
  image(paperImage, paper.position.x,paper.position.y,40,40);
  rectMode(CENTER);
  rect(Ground.position.x,Ground.position.y,800,10);
  rect(dustbin.position.x,dustbin.position.y,70,20);
  rect(dustbin2.position.x,dustbin2.position.y,20,70);
  rect(dustbin3.position.x,dustbin3.position.y,20,70);

  imageMode(CENTER);
  image(dustbinImage, dustbin.position.x+5,dustbin.position.y-50,100,110);
}

function keyPressed(){
    if (keyCode===UP_ARROW){
		console.log("Hello");
        Matter.Body.applyForce(paper,paper.position,{x:0.2,y:-0.2});
    }

}


