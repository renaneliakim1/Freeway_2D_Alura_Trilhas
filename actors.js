let yActor = 366;
let xActor = 100;




let collide = false;

function showActor(){
    image(actorImage, xActor, yActor, 30, 30);
}



function moveActor(){
    if (keyIsDown(UP_ARROW)){
        yActor -= 3;
    }

    if (keyIsDown(DOWN_ARROW)){
        yActor += 3;
    }
}



function checkCollision(){
    for(let i = 0; i < imageCars.length; i = i + 1){    
        collide = collideRectCircle(xCars[i], yCars[i], carLength, carHeight,xActor,yActor, 15)
        if(collide){
            print("collision")

        }        
        


    }
}


