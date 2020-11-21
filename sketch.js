var car,wall,car2,carimg,carCrashImg1,carCrashImg2,carCrashImg3;

var speed,weight,speed2,weight2;

function preload(){
  carimg = loadImage("carimage1.jpg");
  carCrashImg1 = loadImage("beetle-red.jpg");
  carCrashImg2 = loadImage("beetle-green.jpg");
  carCrashImg3 = loadImage("beetle-yellow.jpg");
}



function setup() {
  createCanvas(2000,2000);

  speed = random(55,90);

  weight = random(400,1500);

  speed2 = random(55,90);

  weight2 = random(400,1500);

  car = createSprite(50, 50, 50, 50);

  car.velocityX = speed;

  car.addImage("before",carimg);
  car.addImage("after1",carCrashImg1);
  car.addImage("after2",carCrashImg2);
  car.addImage("after3",carCrashImg3);

  car.scale=0.7;

  car2 = createSprite(50, 200, 50, 50);

  car2.velocityX = speed2;

  car2.addImage("before",carimg);
  car2.addImage("after1",carCrashImg1);
  car2.addImage("after2",carCrashImg2);
  car2.addImage("after3",carCrashImg3);

  car2.scale=0.7;

  wall = createSprite(1500, 60, 50, height/5);

  wall.shapeColor = "green";


}

function draw() {
   
  background("white");

if(wall.x-car.x < (car.width+wall.width)/2){
   car.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed/22509;
   if (deformation > 180)
   {
    car.changeImage("after1",carCrashImg1);

   }
    if (deformation < 180 && deformation > 100)
       {
         car.changeImage("after2",carCrashImg2);

       }
       if ( deformation < 100)
       {
        car.changeImage("after3",carCrashImg3);

      }
     }

     if(wall.x-car2.x < (car2.width+wall.width)/2){
      car2.velocityX = 0;
      var deformation = 0.5 * weight2 * speed * speed/22509;
      if (deformation > 180)
      {
        car2.changeImage("after1",carCrashImg1);
      }
       if (deformation < 180 && deformation > 100)
          {
            car2.changeImage("after2",carCrashImg2)
          }
          if ( deformation < 100)
          {
           car2.changeImage("after3",carCrashImg3);
         }
        }
    drawSprites();
}