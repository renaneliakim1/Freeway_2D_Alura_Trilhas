
function setup(){
    createCanvas(500, 400);
    trackSound.loop();
}

function draw(){
    background(roadImage);
    showActor();    
    showCar();
    moveCar();
    moveActor();
    returnStartingPositionCar();
    checkCollision();

    displayPoints();
    scoreBoard();
}



function showCar (){
    image(car1, xCar, 40, 50, 40);    
}

function moveCar(){
    xCar -= 2;
}



