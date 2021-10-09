const digitalCraftsCrew = [
     "Jamie",
     "Dr. Vicki",
     "Jada",
     "Athena",
     "Dee",
     "Ernesto",
     "Robbie"
]
 console.log(digitalCraftsCrew.length); //Length of the array

 digitalCraftsCrew.push('Moe');//Add a new item to the END of the array
console.log(digitalCraftsCrew);

const removeLastItem = digitalCraftsCrew.pop(); //Remove item from the END of the array
console.log(removeLastItem);

const indx = digitalCraftsCrew.indexOf("Dr. Vicki"); //Get the index of "Dr. Vicki"
console.log(indx);