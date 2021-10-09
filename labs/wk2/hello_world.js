//Hello World: My First JavaScript program
console.log("Hello World"); // <-- Look! I did it

//Save values for later use
const friendlyGreeting = "Rodger"; // <-- I am going to use this one again
console.log(friendlyGreeting);

//Combine two or more variables
const whatAmIDoing = "I just combine two varibles!";
console.log(friendlyGreeting + " " + whatAmIDoing);
console.log("Rodger" + " " + "I just combine two varibles!");


//Booleanfdsa



//const theAnswer = 23 + 19;
//console.log(theAnswer);

const firstNumber = 23;
let secondNumber = 19;
const theAnswer = firstNumber + secondNumber; // 23 + 19 = 42
console.log("The answer is", theAnswer); // My answer is 42

secondNumber = 100;
const secondAnswer = firstNumber + secondNumber; // 23 + 100 = 123
console.log("My second answer is ", secondAnswer);//secondAnswer = 123
console.log("The answer is still", theAnswer); // my answer is still 42
console.log("Even though the second number is now ", secondNumber); //second number is 100

const theString = `My second answer is ${theAnswer} not the ${secondAnswer}`
console.log(theString);

//Call function
add();

//now I am going to right a function
function add(){
    let num1 = 2;
    let num2 = 3;
    let funAnswer = num1 + num2;
    return console.log(funAnswer);
    
}
//now I am going to call my function
//add(2,3); //<-- return 5

//Created variable for numbers, and function
//let numberOne = 2;
//let numberTwo = 3;
//let functionAnswer = add(numberOne,numberTwo);


//Print and call the function
//console.log(functionAnswer); // 5

