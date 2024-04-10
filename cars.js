//car1

let xCar1 = 600;
let yCar1 = 40;
let speedCar1 = 2;


//car2

let xCar2 = 600;
let yCar2= 96;
let speedCar2 = 2.5;


//car3

let xCar3 = 600;
let yCar3= 150;
let speedCar3 = 3.2;


function showCar (){
    image(car1, xCar1, yCar1, 50, 40);    // para adc mais de um car na linha altere o terceiro parametro "ycar1"
    image(car2, xCar2, yCar2, 50, 40);    
    image(car3, xCar3, yCar3, 50, 40);    


}

function moveCar(){
    xCar1 -= speedCar1;
    xCar2 -= speedCar2;
    xCar3 -= speedCar3;

}
