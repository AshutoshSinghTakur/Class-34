const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var world, engine;

var ground;

function setup(){
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300,700,700,20);

    box1 = new Box(300,650,70,70);
    box2 = new Box(300,450,70,70);
}

function draw(){
    background("black");
    Engine.update(engine);
    
    ground.display();
    box1.display()
    box2.display()
}