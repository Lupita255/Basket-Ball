const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var basketball;

var attach, attachObj;

var bin1, bin2, bin3;


function preload(){
	backgroundImg = loadImage("background.png");
	
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

        basketball = new ball(200,400,50)
	
	attach=new chain(basketball.body,{x:200, y:400});

	bin1 = new Bin(950,550,230,20);
	bin2 = new Bin(825,490,20,130);
	bin3 = new Bin(1070,490,20,130);
	
        Engine.run(engine); 

}

function draw() {
	background(backgroundImg);
	

        basketball.display();
	
	attach.display();
	
	bin1.display();
	bin2.display();
	bin3.display();
	
}

function mouseDragged(){
	basketball.body.position.x = mouseX;
        basketball.body.position.y = mouseY;
}

function mouseReleased(){
	attach.fly();
}
