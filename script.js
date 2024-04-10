let roadImage; 
let actorImage;
let car1;
//car
let xcar = 420;
 


function preload(){
    roadImage = loadImage("images/road.png"); 
    actorImage = loadImage("images/actor.png");
    car1 = loadImage("images/car1.png");
}


function setup(){
    createCanvas(500, 400);
}

function draw(){
    background(roadImage);
    image(actorImage, 100, 366, 30, 30);
    image(car1, xcar, 40, 50, 40);
}



