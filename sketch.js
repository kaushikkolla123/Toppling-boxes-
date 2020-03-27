const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var Gravity;
var x,y,w,h;

 var ground;
 var Slider;
var boxes = [];
var gSlider;
 
 
function setup() {
    createCanvas(600, 600);
 engine = Engine.create;
world = Engine.world;
Engine.run(engine);
    
 
    
    Slider = createSlider(0, 400, 550);
    Slider.position(40, 565);
    Slider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

    

    ground = Bodies.rectangle(10,350,30,10);
    ground.scale = 2;
    ground.shapeColor = "brown";
    World.add(world,ground);

}
 
function mousePressed() {
    if (mouseY < 350) {
        boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
    }
}
 
function draw() {
    background("black");
 var maximum = gSlider.value();
for (var i = 0; i < boxes.length; i++ )    {
    boxes(i).show();

}
 
 var posX = ground.position.x;
 var posY = ground.position.y;
 fill("red");
 rectMode(BOTTOM);
 rect(ground.position.x,ground.position,30,10);
text("Gravity"+maximum,160,381);
}
function Box(x, y, w, h, options) {
    friction:0.090
    restitution:0.005
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    World.add(world, this.body);

    var options = {
        isStatic : true
    }
 
    this.show = function () {
        var black = this.body.position;
        var straight = this.body.angle;
 
        push();
        translate(pos.x, pos.y);
        rotate(straight);
        rectMode(CENTER);
        strokeWeight(5);
        rect(0, 0, this.w, this.h);
        pop();
    }
