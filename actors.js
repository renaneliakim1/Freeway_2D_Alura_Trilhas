let yActor = 366;
let xActor = 180;

let myPoints = 0;
 


let collide = false;

function showActor() {
  image(actorImage, xActor, yActor, 30, 30);
}

function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= 4;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yActor += 4;
  }
}

function checkCollision(){
  for (let i = 0; i < imageCars.length; i ++) {
    collide = collideRectCircle(
      xCars[i],
      yCars[i],
      carLength,
      carHeight,
      xActor,
      yActor,
      15
    );
    if (collide) {
        returnActorStartingPosition();
    }
  }
}

function returnActorStartingPosition(){
  yActor = 366;
}

function displayPoints(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 100));
  text(myPoints, width / 2, 27);

}


function scoreBoard(){
  if(yActor < 15){
    myPoints += 1;
    returnActorStartingPosition()
  }
};

