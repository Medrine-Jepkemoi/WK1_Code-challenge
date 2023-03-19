//A variable declared that will prompt a user to enter their marks and the value will be converted into an int
let studentMarks = parseInt(prompt("Please enter your marks: "));

//The conditions set in the switch statements require one of them to be true so as to a blocke of code dependant on the condition
switch(true){

    //Conditions that when one has been satisfied, they will execute their blocks of code by outputing the right result
    case studentMarks >= 80 && studentMarks <= 100:
        console.log(`A`);
        break

        case studentMarks >= 60 && studentMarks <= 79:
            console.log(`B`);
            break

            case studentMarks >= 49 && studentMarks <= 59:
                console.log(`C`);
                break

                case studentMarks >= 40 && studentMarks <= 49:
                    console.log(`D`);
                    break

                    case studentMarks < 40 && studentMarks >= 0:
                        console.log(`E`);
                        break

                        default:
                        console.log(`Invalid input, please enter a valid input.`);

}

