
function setup(){
    createCanvas(500, 400);
}

function draw(){
    background(roadImage);
    showActor();    
    showCar();
    moveCar();
    moveActor();

}



function showCar (){
    image(car1, xCar, 40, 50, 40);    
}

function moveCar(){
    xCar -= 2;
}

