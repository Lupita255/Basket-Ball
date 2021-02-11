const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var matter, engine;
var ballImg;
var backgroundImg;


function preload(){
	backgroundImg = loadImage("background.png");
	
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;



	


}

function draw() {
	background(backgroundImg);
        Engine.run(engine);


}

