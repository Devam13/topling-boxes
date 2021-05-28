const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;
var box1,box2,box3,box4;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  box1 = new Box(200,100,50,50);
  box2 = new Box(220,150,50,100);
  box3 = new Box(300,200,50,100);
  box4 = new Box(300,100,50,50);
  ground = new Ground (200,390,4000,20);
  /*var options={
    restitution:1.5
  }
 ball= Bodies.circle(200,100,10,options);
  World.add(world,ball);

  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);*/
}

function draw() {
  background(255,255,255);  
 Engine.update(engine);
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 ground.display();
/*rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);*/
}
