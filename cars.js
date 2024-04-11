let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let speedCars = [12, 9.5, 7.2, 7, 12.5, 10];
let carLength = 50;
let carHeight = 40;

function showCar() {
  for (let i = 0; i < imageCars.length; i++) {
    image(imageCars[i], xCars[i], yCars[i], carLength, carHeight);
  }
}

function moveCar() {
  for (let i = 0; i < imageCars.length; i++ ) {
    xCars[i] -= speedCars[i];
  }
}

function returnStartingPositionCar() {
  for (let i = 0; i < imageCars.length; i++) {
    if (wentOverboard(xCars[i])) {
      xCars[i] = 600;
    }
  }
}


function wentOverboard(xCars){
    return xCars < -50;
}


