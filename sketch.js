const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particle=[]
var division=[]
var plingo=[]





function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  Engine.run(engine)



  ground1=new Ground(240,790,480,20)
  ground2=new Ground(0,400,20,800)
  ground3=new Ground(480,400,20,800)
  
for(i=16; i<480; i=i+65){
  division.push(new Division(i,650))
}
  for (i=10;i<=width ; i=i+50){
    plingo.push(new Plingo(i,50))
  }

  for (i=30;i<=width ; i=i+50){
    plingo.push(new Plingo(i,150))
  }
 
  for (i=10;i<=width ; i=i+50){
    plingo.push(new Plingo(i,250))
  }

  for (i=30;i<=width ; i=i+50){
    plingo.push(new Plingo(i,350))
  }
}

function draw() {
  background(0);  
  drawSprites();
  ground1.display()
  ground2.display()
  ground3.display()

  if(frameCount% 30===0){
    particle.push(new Particles())
      }
      for( var i=0;i<particle.length;i++){
        particle[i].display()
      }

      for(i=0; i<division.length; i++){
        division[i].display()
      } 

      for(i=0; i<plingo.length;i++){
        plingo[i].display()
      }
}