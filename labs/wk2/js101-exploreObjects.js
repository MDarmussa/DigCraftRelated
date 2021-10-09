//Initiate the object and assign its keys and values
const aboutMe = {
     fullName: "Mohammad Darmussa",
     age: 32, 
     faveColor: "White", 
     likesPizza: "True"
}
console.log(aboutMe);   //print all object

aboutMe.faveColorProp = "Black"   // add a new variable to the object
console.log(aboutMe)

aboutMe.fullName = "Darmussa" //update my fullname
console.log(aboutMe);

delete aboutMe.likesPizza; //delete myPizzza property
console.log(aboutMe);

aboutMe.likesRamen = "True"  //add a boolean property
console.log("It's", aboutMe.likesRamen, "I like Ramen");