//Module 2: Student Guide & Timeline-2
//Reading: Common Patterns

// // chd = changed for manipulation

// // //printing from 1 to 10      chd
// let n = 1;
// while(n<10){
//     // n = n / 1; //
//      console.log(n);
//      n++; //n = n + 1
// }
// // console.log(n);

// //n++;

//--------------------------
//sharing a plate of cookies with a friend.

// let n = 5;    
// let conversation = '';    
// while (n > 0) {    
//   if (n % 2 !== 0) {
//     conversation += "one for me. ";    
//     if (n === 1) {
//       conversation += "none for you.";    
//     }
//   } else {
//     conversation += "one for you\n";    
//     if (n === 1) {
//       conversation += "none for me.";    
//     }
//   }

//   n--;    
// }    
// console.log(conversation);

//-----------------------------------
//Counting specific items in an Array
// print each rating / google style
//i = 20 (index)
//rating[i] means the value of the index

// const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
//         const max = ratings.length;
//         let count1 = 0;
//         let count2 = 0;
//         let count3 = 0;
//         let count4 = 0;
//         let count5 = 0;
//         for (let i=0; i<max; i++) {
//         const stars = ratings[i];
//         if (stars === 5) {
//             count5++;
//         } 
//         else if (stars === 4) {
//             count4++; 
//         }
//         else if (stars === 3) {
//             count3++;
//         }
//         else if (stars === 2) {
//             count2++;
//         }
//         else if (stars === 1) {
//             count1++;
//         }  
//         }
//         console.log(count5, count4, count3, count2, count1);

//----------------------------------------
//Summing Arrays

// const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
// const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];
// const max = c1Votes.length; // c2Votes.length is the same
// let c1Total = 0;
// let c2Total = 0;
// for (let i=0; i<max; i++) {
//   console.log(c1Votes[i]);
//   c1Total += c1Votes[i];
//   console.log(c2Votes[i]);
//   c2Total += c2Votes[i];
// }
// if (c1Total > c2Total) {
//      console.log('Candidate 1 is the winner!');
//    } else if (c2Total > c1Total) {
//      console.log('Candidate 2 is the winner!');
//    } else {
//      console.log('Time for a run-off. It was a tie!');
//    }

//-------------------------------------------
//Searching
//search the name for the assigned table
// const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
// const tables = [3, 1, 1, 2, 3, 2];


// const numgGuestToFind = 3; // hard-coded in this example

// for (let i=0; i<guests.length; i++) {
//   if (tables[i] === numgGuestToFind) {
//     //console.log(`${guestToFind} sits at table ${tables[i]}`);
//     console.log(`${numgGuestToFind} is assigned for ${guests[i]}`);
//   }
// }
//------------------------------------------- +++++++


// const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
// const tables = [3, 1, 1, 2, 3, 2];

// const guestToFind = 'Mustard'; // hard-coded in this example
// let foundIndex = -1;
// for (let i=0; i<guests.length; i++) {
//   if (guests[i] === guestToFind) {
//     //foundIndex = i;
//     break;
//   }
// }
// if (foundIndex !== -1) {
//   console.log(`${guestToFind} sits at table ${tables[i]}`);
// } else {
//   console.log(`${guestToFind} is not on the guest list.`);
// }

//------------------------------------------------++++

// const HEALTHY = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
// let sample1 = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
// let sample2 = 'GCTZGGTGGGZCACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTZGGGCAACCC';


// let sequence = [];
// for (let i = 0; i<sample1.length; i++) {
//   const letter = sample1[i];
//   if (letter === 'Z') {
//     sequence.push(HEALTHY[i]);
//   } else {
//     sequence.push(letter);
//   }
// }
// sequence = sequence.join('');
// console.log(sequence);

//---------------------------------------


// const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];

// const max = ratings.length;
// const ratingsCount = {};
// for (let i=0; i<max; i++) {
//   const stars = ratings[i];
//   if(ratingsCount =[i]);
//   ratingsCount++;
//   if else {
//     ratingsCount.
//   }
//   }


// }     kristen has the code


//---------------------

let n = 0;
while 


