/**
* Determines whether the speed of a vehicle is within the limits, beyond it and by howmany speedpoints or if the speed points have been exceeded, causing a penalty using the car's speed as a parameter
* @param {Number} carSpeed
* @return {String} comment
*/
function speedDetector(carSpeed){

    //Declare the speedLimit variable and assign the speedlimit value to it
    let speedLimit = 70; 
    
    //Declare a variable exceededSpeedPoints that calculates the demerit points by deducting the speed limit from the car's speed and diviting it by the value of one demerit point
    let exceededSpeedPoints = (carSpeed - speedLimit) / 5; 


    //Conditions set, to determine if the car's speed was within the speed limit, above it and by how many demerit points and if the driver has exceeded the maximum number of demerit points to have their licence suspended
    if (carSpeed < speedLimit){
        return `Ok`; 
    }

    else if (carSpeed > speedLimit && exceededSpeedPoints < 12){

        return `Points: ${exceededSpeedPoints}`; 
    }

    else{
        return `License suspended`;
    }
}


//calling the function and passing an argument to find out the outcome of the driver based on their speed
let returnedValue = speedDetector(90); 
console.log(returnedValue); 