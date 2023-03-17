let studentMarks = parseInt(prompt("Please enter your marks: "));

if(studentMarks >= 80 && studentMarks <= 100){
    console.log(`A`);
}
else if (studentMarks >= 60 && studentMarks <= 79){
    console.log(`B`);
}
else if (studentMarks >= 49 && studentMarks <= 59){
    console.log(`C`);
}
else if(studentMarks >= 40 && studentMarks <= 49){
    console.log(`D`);
}
else if(studentMarks < 40 && studentMarks >= 0){
    console.log(`E`);
}
else {
    console.log(`Invalid input, please enter a valid input.`)

}

