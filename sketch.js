const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies

var engine,world
var ground,ball

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground=Bodies.rectangle(400,380,800,20);
  World.add(world,ground);
  console.log(ground);
}

function draw() {
  background(0);  
  
}

