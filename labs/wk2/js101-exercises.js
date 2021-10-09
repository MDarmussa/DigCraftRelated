
//JS101-exercises Module --- Small

//ex 1
let myNum = 15;
function makeANumber(){
     //var myNum = 15;
     return myNum;
}
console.log(myNum);


//ex 2
var myInt = 20;
function makeAnInteger(){
     //var myInt = 20;
     return myInt;
}
console.log(myInt);

//ex 3
let myFloat = 12.02010;
function makeFloat(){
    //var myFloat = 12.02010;
    return myFloat; 
}
console.log(myFloat);

//ex 4
var zilch = 0;
function makeZero(){
     //var zilch = 0;
     return zilch;
}
console.log(zilch);

//ex 5
var huh;
function makeNothing(){
     //var huh;
     return huh;
}
console.log(huh)

//ex 6
var myBool = true;
function makeBoolean(){
     return myBool;
}
console.log(myBool);

//ex 7
var yep = true;
function makeTrue(){
     return yep;
}
console.log(yep)

//ex 8
var nope = false;
function makeFalse(){
     return nope;
}
console.log(nope)

//ex 9
var nothingMuch = null;
function makeNull(){
     return nothingMuch;
}
console.log(nothingMuch)

//ex10
let hW = "Hello, World!";
function helloWorld(){
     return hW;
}
console.log(hW)

//ex 11         plz review
var name = "Mohammad";
function helloName(Mohammad){
     return name;
}
console.log("Hello, " + name + "!");


//ex 12
var tarPitAbstract = 'Complexity is the single major difficulty in the successful development of large-scale software systems. ' +
'Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. ' +
'We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. ' +
'To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.'
function abstractLength(){
     return tarPitAbstract.length;
}
//console.log(tarPitAbstract);  this print all the var / the paragraph
console.log(tarPitAbstract.length);


//ex 13    
var chorus = 'Who let the dogs out?';
function makeLoud(){
     return chorus;
}
console.log(chorus.toUpperCase());


//ex 14
var str = 'I LOVE CODING!';
function makeQuiet(){
     return str;
}
console.log(str.toLocaleLowerCase());  


//ex 15
let n = 2;
function add99(n){
     return n;
}
console.log(99 + n);


//ex 16     
var x = 12;
var y = 3;
let h = x + y;
function add(x, y){
     return h;
}
console.log(h);


//ex 17
var c = 6;
var d = 2;
let r = c - d;
function subtract(c, d){
     return r;
}
console.log(r)


//ex 18
i = 6;
z = 5;
let t = i * z;
function multiply(i, z){
     return t;
}
console.log(t);


//ex 19
p = 40;
b = 2;
u = p / b;
function divid(p, b){
     return u;
}
console.log(u);


//ex 20
var j = 5;
var l = 2;
let k = j % l;
function mod(j, l){
     return k;
}
console.log(k)


//ex 21
var fruits = ['Apple', 'Banana', 'Cherry']
function threeFruits(){
     return fruits;
}
console.log(fruits);


//ex 22
var diverseArray = ['Skateboard', null, 8.75, 'Eiffel Tower', 44, 7, true, null]
function multipleTypes(){
     return diverseArray;
}
console.log(diverseArray);


//ex 23
var people = ["mike", "joe", "sam", "Dan","Robi", "Moe"];
function indexAccess(){
     return people[2];
}
console.log(people[2]);


//ex24
var arr2 = ["a", "b", "c", 'd'];
function useLength(){
     return arr2.length;
}
console.log(arr2.length);


//ex 25        plz review to use funcion and reurn value
const arr = ['a', 'b', 'c']
// function usePush(){
     // var arr = [];
     arr.push('d');
     // return arr;
// }
console.log(arr);

//ex 25  repeated
const arr5 = ['a', 'b', 'c']
function usePush(){
     return arr5.push('d');
}
console.log(arr5.push('d'));


//ex 26
var arr6 = ['C', 'A', 'G', 'T', 'A', 'A', 'G', 'T']
function useIndefOf(){
     return arr6.indexOf('T');
}
console.log(arr6.indexOf('T'));


//ex 27
var arr7 = ['a', 'b', 'c', 'd', 'e', 'f'];
function useJoin(){
     return arr7.join('-');
}
console.log(arr7.join('-'))


//Objects
//^^^^^^^^^^^^^^^^^^^^^^^
const numbers = { numberOne: 1, numberTwo: 2, numberThree: 3}
function threeNumbers () {
     return numbers;
}
console.log(numbers);

// -------------------------------------------------
const diverseObject = { name: 'banana', count: 42, isDelicious: true }
function manyTypes () {
     return diverseObject;
}
console.log(diverseObject);

//----------------------------------------------------

console.log("-------------------------- not sure about this example down")
const bestFruit = { name: 'banana', count: 42, isDelicious: true }
function keyAccess (){
     console.assert(bestFruit['name'] === 'banana')
     console.assert(bestFruit['count'] === 42)
     console.assert(bestFruit['isDelicious'] === true)
     return bestFruit; 
}
console.log(bestFruit)


//----------------------------------------------------
const bootcampInstructor = {
     name: 'Susan',
       email: 'susan@bootcamp.digitalcrafts',
       age: 32,
       heightFeet: 5.5,
       favoriteColor: 'green',
       homeTown: 'Houston',
       pet: 'cat',
       ownsCar: true
}
function largeObject () {
     return bootcampInstructor
}
console.log(bootcampInstructor)

//----------------------------------------------------
console.log('==========================    please review')
const bootcampInstructor1 = {
     name: 'Susan',
    favoriteColor: 'green',
    favoriteFoods: [
     'chicken pot pie',
     'salmon',
     'pho'
    ]
}
function nestedArray (){
     console.assert(bootcampInstructor1['favoriteFoods'][0] === 'chicken pot pie')
     return bootcampInstructor1;
     //return favoriteFoods;
}
console.log(bootcampInstructor1);

//----------------------------------------------------
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
const bootcampInstructor5 = {
     name: 'Susan',
     favoriteColor: 'green',
     favoriteFoods1: [
       'chicken pot pie',
       'salmon',
       'pho'
     ]
}
function dotNotation (){
     console.assert(bootcampInstructor5.name === 'Susan')
     console.assert(bootcampInstructor5['name'] === 'Susan')
     const nameString = 'name'
     console.assert(bootcampInstructor5[nameString] === 'Susan')
     console.assert(bootcampInstructor5.favoriteColor === 'green')
     console.assert(bootcampInstructor5['favoriteColor'] === 'green')
     console.assert(bootcampInstructor5['favorite' + 'Color'] === 'green')
   
     console.assert(bootcampInstructor5['favoriteFoods1'][0] === 'chicken pot pie')
     console.assert(bootcampInstructor5.favoriteFoods1[0] === 'chicken pot pie')

     return bootcampInstructor5
}
console.log(bootcampInstructor5)




//--------------------------------------
// notes
// let or var are the same, they are used as a storage vaiable to assign a value or vaules inside it.

//let, var, const: 
//     - they give the same result. 
//     - must be outside of the function.
// plz ask and check the differences.???????????????