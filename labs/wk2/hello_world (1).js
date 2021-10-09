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

//objects, arrays, loops.. oh my!! 

//object
const friendInfo = {
    fullName: "Alan Turing", // <-- Key = name; Value = Alan Turing
    cell: "6017576", 
    birthday: "June 23"
    
}

//Calling object value
console.log(friendInfo.fullName);

//Creating a superhero object
const superhero = {
    name: "Wonder Woman", 
    alias: "Diana Prince", 
    Bracelets: 2, 
    lassos: 1,
}

//Call FULL object
console.log(superhero);

//udating a value
superhero.alias = "Princess Diana of Themyscira";

//debug alias
console.log(superhero.alias);

//Adding a new value
superhero.hometown = "Themyscira";

//debug Adding hometown
console.log(superhero.hometown);

//Created a varible to call object key
const wonderWomanLassos = superhero.lassos;

//remove a key / value
console.log(wonderWomanLassos) //1


delete superhero.lassos;

//debug delete lassos
console.log(superhero.lassos)

//Superhero firstname
const superheroFName = friendInfo.fullName;

//debug
console.log(superheroFName);


//arrays 
const todos = ["pet the cat",
               "go to work",
               "shop for groceries", 
               "go home", 
               "feed the cat" ]

//Calling a array position
const firstItem = todos[0]
console.log(firstItem);

//find out how many items are in my array

const countArrayItems = todos.length

console.log("How many items do I have?" + countArrayItems);


//add a item to my todo list
todos.push("go to sleep");

//check my length
console.log(todos.length);

//Look at my array
console.log(todos);

//Delete from list
todos.splice(0,2);

//check my length
console.log(todos.length);

//look at my array
console.log(todos);

//Join string to item list
const todoString = todos.join('!\n');

//Call the join
console.log(todoString)

//Create a string
const todoString1 = 'Pet the cat! go to work! shop for groceries! go home! feed the cat';

//Spliting the string
const todos1 = todoString1.split('! ');

//calling todos
console.log(todos1);

//Booleans
const todos2 = ['pet the cat', 'feed the cat'];

function printTodoCount(arrayCount){
    numberCount = arrayCount.length;
    return numberCount;

}

if (printTodoCount(todos2) == 2)
{
    console.log(booleanCount = true);

}
else{
    console.log(booleanCount = false);
}

//remove a todo
//todos.pop();

//printTodoCount(todos2);

//JS 101 Explore Objects

const rodger = {
    fullName : "Rodger Roberts",
    age : 40,
    faveColor : "blue",
    likesPizza : true, 
}


const colorProp = rodger.faveColor;

console.log(colorProp);

rodger.fullName = "Roberts";
console.log(rodger.fullName);

delete rodger.likesPizza;
console.log(rodger);

rodger.likesCalzones = true;
console.log("Rodger likes Calzones" + " " + rodger.likesCalzones);


//Loops

//Create my array
const fruits = ["Banana", "Orange", "Apple", "Mango"]

//Count my length of array
let fLen = fruits.length;

//I just want a orange or a apple.
for(let i = 0; i < fLen; i++){
    if(fruits[i] == fruits[2] || fruits[i] == fruits[3]){
        console.log(fruits[i]);
    }
}
