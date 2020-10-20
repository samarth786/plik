const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisions = [];
var patricle = [];
var pliko = [];
var divisionHeight = 300;

function preload() {
}

function setup(){
createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240,800,480,20);
    p();
    
    r(); 
po();
pou();
pouk();


}    
function draw(){
    background(0);
   
    Engine.update(engine); 
    ground.display();   
  

  

  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
   
  }
  for(var i=0; i<pliko.length; i++){
    pliko[i].display();
   
  }
 


for(var j=0; j<patricle.length; j++){
  patricle[j].display();
 
}
part();


}



function r(){
    for( var i =0; i<=480 ; i = i+80 ) {
        divisions.push(new Groud(i, 800-divisionHeight/2, 10, divisionHeight));
    
      
        }

}

function p(){
   
    for( var j =15; j<=480 ; j = j + 50 ) {
        pliko.push(new plinko(j,75 ));
      //  pliko[0].display();
     
        }
}


function po(){
   
  for( var j =40; j<=480 ; j = j + 50 ) {
      pliko.push(new plinko(j,175 ));
    //  pliko[0].display();
   
      }

      for(var j=0; j<pliko.length; j++){
        pliko[j].display();
       
      }
      
}

function pou(){
   
  for( var j =15; j<=480 ; j = j + 50 ) {
      pliko.push(new plinko(j,275 ));
    //  pliko[0].display();
   
      }

      for(var j=0; j<pliko.length; j++){
        pliko[j].display();
       
      }
      
}
function pouk(){
   
  for( var j =40; j<=480 ; j = j + 50 ) {
      pliko.push(new plinko(j,375 ));
    //  pliko[0].display();
   
      }

      for(var j=0; j<pliko.length; j++){
        pliko[j].display();
       
      }
      
}


function part(){
  if(frameCount % 20 === 0){
  patricle.push(new par(random(200, 300),10, 7.5)); 
   
      
   
    }

}