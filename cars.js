let xCars = [600, 600, 600];
let yCars = [40, 96, 150];
let speedCars = [4, 3.5, 6.2];
let carLength = 50;
let carHeight = 40;

function showCar() {
  for (let i = 0; i < imageCars.length; i++) {
    image(imageCars[i], xCars[i], yCars[i], carLength, carHeight);
  }
}

function moveCar() {
  for (let i = 0; i < imageCars.length; i = i + 1) {
    xCars[i] -= speedCars[i];
  }
}

function returnStartingPositionCar() {
  for (let i = 0; i < imageCars.length; i = i + 1) {
    if (wentOverboard(xCars[i])) {
      xCars[i] = 600;
    }
  }
}


function wentOverboard(xCars){
    return xCars < -50;
}
