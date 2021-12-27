const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base
var wall1
var wall2
var bridge

var stones=[];

function setup() {
  createCanvas(980, 570);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


  base = new Base(590,565,1200,10)
  wall1 = new Base(47.5,275,95,125)
  wall2 = new Base(932.5,275,95,125)
  bridge = new Bridge(15,{x:-60,y:295} )
  joinPoint = new Base(910,295,40,20)

  Matter.Composite.add(bridge.body,joinPoint)
  link = new Link(bridge,joinPoint)

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }

  
}

function draw() {
  background(51);
  Engine.update(engine);



  base.show();
  wall1.show();
  wall2.show();
  bridge.show();
  joinPoint.show();

  for (var stone of stones) {
    stone.show();
  }

}
