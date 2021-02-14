const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var basketball;

var attach, attachObj;

var hoop;


function preload(){
	backgroundImg = loadImage("background.png");
	hoop = loadImage("hoop2.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

        basketball = new ball(200,400,50)
	
	attach=new chain(basketball.body,{x:200, y:400});

	
	
        Engine.run(engine); 

}

function draw() {
	background(backgroundImg);
	
	  image(hoop,550,300,450,400);
        

        basketball.display();
	
	attach.display();
	
}

function mouseDragged(){
	basketball.body.position.x = mouseX;
        basketball.body.position.y = mouseY;
}

function mouseReleased(){
	attach.fly();
}
