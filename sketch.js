const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var basketball;

var attach, attachObj;


function preload(){
	backgroundImg = loadImage("background.png");
	
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

        basketball = new ball(200,400,50)
	
	
        Engine.run(engine); 

}

function draw() {
	background(backgroundImg);
        

        basketball.display();
	
}
