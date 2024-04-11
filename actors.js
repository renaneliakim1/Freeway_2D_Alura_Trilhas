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
      if (actorMovementLimit("down")) {
        yActor += 4;
      }
    }
  
    if (keyIsDown(LEFT_ARROW)) {
      if (actorMovementLimit("left")) {
        xActor -= 4;
      }
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      if (actorMovementLimit("right")) {
        xActor += 4;
      }
    }
  }


function checkCollision() {
  for (let i = 0; i < imageCars.length; i++) {
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
      collisionSound.play();
      if (pointsGreaterThanZero()) {
        myPoints -= 1;
      }
    }
  }
}

function returnActorStartingPosition() {
  yActor = 366;
}

function displayPoints() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 100));
  text(myPoints, width / 2, 27);
}

function scoreBoard() {
  if (yActor < 15) {
    myPoints += 1;
    dotSound.play();
    returnActorStartingPosition();
  }
}

function pointsGreaterThanZero() {
  return myPoints > 0;
}

function actorMovementLimit(direction) {
  if (direction === "down") {
    return yActor < 366; // Limita o movimento para baixo
  } else if (direction === "left") {
    return xActor > 0; // Limita o movimento para a esquerda
  } else if (direction === "right") {
    return xActor < width - 30; // Limita o movimento para a direita
  }
}
