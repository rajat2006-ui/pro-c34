
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof1;
var bob=[];
var chain=[];

function setup() {
	createCanvas(windowWidth/2, windowHeight/2);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new Roof(450,100,300,20);

	for(var i=350;i<=550;i=i+50){
		bob.push(new Bob(i,350,"red"))
	}
	
	var chainX=-120
	for(var a=0;a<bob.length;a++){
			
		chain.push(new Chain(roof1.body,bob[a].body,chainX,0))
		chainX=chainX+60
		
	}

	/*chain1=new Chain(roof1.body,bob1.body,-120,0);
	chain2=new Chain(roof1.body,bob2.body,-60,0);
	chain3=new Chain(roof1.body,bob3.body,0,0);
	chain4=new Chain(roof1.body,bob4.body,60,0);
	chain5=new Chain(roof1.body,bob5.body,120,0);*/

	console.log(windowWidth/2)
	console.log(windowHeight/2)	
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightblue");

  roof1.display();
  
  for(var j=0;j<bob.length;j++){
	  bob[j].display()
  }
 
 /* chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();*/

  for(var j=0;j<chain.length;j++){
	  chain[j].display()
  }
}

function mouseDragged(){
	
		Matter.Body.setPosition(bob[0].body,{x:mouseX,y:mouseY});
	
	
}