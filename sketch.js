const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    

    box1 = new Box(550,300,50,50);
    box2 = new Box(550,300,50,50);
    box3 = new Box(550,300,50,50);
    box4 = new Box(550,300,50,50);
    box5 = new Box(550,300,50,50);
    box6 = new Box(550,300,50,50);
    box7 = new Box(550,300,50,50);
    box8 = new Box(550,300,50,50);
    ground1=new ground(width/2,height-20,width,20)
    cr71=new ball (100,100,60,60)
    rope1=new rope (cr71.body,{x:500,y:50})
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    cr71.display();
    rope1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
   
}