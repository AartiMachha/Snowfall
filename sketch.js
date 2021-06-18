const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var bg;
var MaxSnow=100;
var snow =[];

function preload(){
  bg= loadImage("snow3.jpg");
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  
}

function draw() {
  Engine.update(engine);
  background(bg); 

  if(frameCount%9===0){
    snow.push(new Snow(random(0,800),0,30,30));
  }

  for(var s=1; s<snow.length; s++){
    snow[s].display();
  }

  drawSprites();
  
}