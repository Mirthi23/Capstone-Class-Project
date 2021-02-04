const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var woman1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var blok13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;
var hurdle1,hurdle2,baby,gossipers,rowdy;
var goal,baby2,gossipers2;

function setup()
 {
  createCanvas(1000,1000);
  engine = Engine.create();
	world = engine.world;
  
//displaying
woman1 = new Woman(950,950,140,140);

//hurdles
baby = new Baby(450,840,100,100);
baby2 = new Baby(900,250,100,100);
rowdy  = new Rowdy(680,700,170,170);
gossipers = new Gossipers(430,190,130,130);
gossipers2 = new Gossipers(320,970,130,130);
hurdle1 = new Hurdle1(400,650,130,130);
hurdle2 = new Hurdle2(150,450,130,130);

//goal(the most important one):D
goal = new Goal(70,50,100,100);


//blocks
block1 = new Maze(850, 950,20,150);
block2 =new Maze(780, 850,150,20);
block3  = new Maze(650, 950,20,150);
block4 = new Maze(800, 700,20,150);
block5 = new Maze(709,600,150,20);
block6 = new Maze(530,900,150,20);
block7 = new Maze(700,100,150,20);
block8 = new Maze(185, 900,150,20);
block9 = new Maze(600,650,20,150);
block10 = new Maze(120, 608,20,150);
block11 = new Maze(500, 508,20,150);
block12 = new Maze(300, 408,20,150);
block13 = new Maze(206, 608,150,20);
block14 = new Maze(600, 120,20,150);
block15 = new Maze(600, 190,150,20);
block16 = new Maze(390, 808,20,150);
block17 = new Maze(180, 808,150,20);
block18 = new Maze(400, 108,150,20);
block19 = new Maze(200, 308,20,150);
block20 = new Maze(320, 588,20,150);
block21 = new Maze(920,488,20,150);
block22 = new Maze(700, 380,150,20);
block23 = new Maze(105, 178,20,150);
block24 = new Maze(130, 108,150,20);
block25 = new Maze(790, 208,20,150);



Engine.run(engine);
}

function draw()
 {

  background("lightpink");  
  woman1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  baby.display();
  rowdy.display();
  gossipers.display();
  gossipers2.display();
  hurdle1.display();
  hurdle2.display();
  baby2.display();
  goal.display();



  drawSprites();


}

function keyPressed()
{
  if(keyCode === 37)
  {
    woman1.x =woman1.x - 3;
  }
}
 
function keyPressed()
{
  if(keyCode === 38)
  {
    woman1.y =woman1.y - 3;
  }
}
 

function keyPressed()
{
  if(keyCode === 39)
  {
    woman1.y =woman1.y + 3;
  }
}

function keyPressed()
{
  if(keyCode === 40)
  {
    woman1.y =woman1.y - 3;
  }
}




