let roadImage; 
let actorImage;
let car1;
let car2;
let car3;


let trackSound;
let collisionSound;
let dotSound;






function preload(){
    roadImage = loadImage("images/road.png"); 
    actorImage = loadImage("images/actor.png");
    car1 = loadImage("images/car1.png");
    car2 = loadImage("images/car2.png");
    car3 = loadImage("images/car3.png");
    imageCars = [car1, car2, car3, car1, car2, car3];

    trackSound = loadSound("sounds/track.mp3");
    collisionSound = loadSound("sounds/collision.mp3");
    dotSound = loadSound("sounds/dot.wav");



}

