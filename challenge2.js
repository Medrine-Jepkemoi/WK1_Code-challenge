//declare a function speedDetoctor and assign a parameter carspee to it
function speedDetector(carSpeed){

    let speedLimit = 70; //Declare the speedLimit variable and assign the speedlimit value to it
    
    let exceededSpeedPoints = (carSpeed - speedLimit) / 5; //Declare a variable exceededSpeedPoints that calculates the demerit points that one gets after exceeding a certain speed


    //Conditions set, where one of them must be met to return a desired output

    //first condition
    if (carSpeed < speedLimit){
        return `Ok`; //expected output when the first condition is met
    }

    //second condition
    else if (carSpeed > speedLimit && exceededSpeedPoints < 12){

        return `Points: ${exceededSpeedPoints}`; //expected output when the second condition is met
    }

    else{
        return `License suspended`;//expecthed output when none of the above conditions are met
    }
}


//calling the function and passing an argument to it
let returnedValue = speedDetector(300); //declaring a variable to store the output after the function has been called
console.log(returnedValue); //displaying the outputted value on the console