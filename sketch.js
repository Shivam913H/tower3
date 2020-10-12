const  Events = Matter.Events
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
 
var engine,world,ball;

var plinkos = [];
var divisions = [];
var divisionsvalue = [];

var turn=0;

var gamestate = "PLAY";
var particle,canvas;



var divisionHeight=300;
var score =0;
function setup() {
  var canvas =   createCanvas(800, 800);
    
    engine = Engine.create();
    
    world = engine.world;
   
    
    ground = new Ground(width/2,height,width,20);
 


    for (var k = 0; k <=width; k = k + 80) 
    {
         divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }


    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }


    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }


    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }


    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }

    
    
    //mousePressed();

  //  console.log(divisionsvalue)
    divisionsvalue.push(divisions[0].body.position,divisions[1].body.position,divisions[2].body.position,
      divisions[3].body.position,divisions[4].body.position,divisions[5].body.position,divisions[6].body.position,
      divisions[7].body.position,divisions[8].body.position,divisions[9].body.position,divisions[10].body.position);

   }
 


function draw() {
  background("black");

  ground.display();

 


  textSize(20)
  text("Score : "+score,20,30);
  text("500",25,525);
  text("500",105,525);
  text("500",180,525);
  text("500",260,525);
  
  text("150",340,525);
  text("150",420,525);
  text("150",505,525);
  
  text("200",585,525);
  text("200",665 ,525);
  text("200",745,525);
  //text(turn,745,100);
 
 
  Engine.update(engine);
 

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
     
  }
 
 
//  for (var j = 0; j < particles.length; j++) {
   
  //   particles[j].display();
  //}
   
  for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
  }
  

   if(particle!==undefined){
       particle.display();
         if(particle.body.position.y>760){
           if(particle.body.position.x<310&&particle.body.position.x>10){
               score=score+500;
               particle=undefined
               
            }
         }
    }
    if(particle!==undefined){
     
        if(particle.body.position.y>760){
          if(particle.body.position.x>315&&particle.body.position.x<560){
              score=score+150;
              particle=undefined
              
           }
        }
   }
   if(particle!==undefined){
    
      if(particle.body.position.y>760){
        if(particle.body.position.x>570&&particle.body.position.x<800){
            score=score+200;
            particle=undefined
            
         }
      }
 }
    
    if(turn>=5){
      textSize(42)
      text("Game Over",300,350)
      gamestate="end"

    }
  

  // console.log(turn)




  }

  function  mousePressed(){
  if(gamestate!=="end"){
    turn++;
    particle = new Particle(mouseX,10,10);
    }
  } 