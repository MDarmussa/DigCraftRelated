//Reading: Anonymous Functions & Callbacks

//adds two numbers using function


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = [];
// for (let i=0; i<nums.length; i++) {
//   result.push(nums[i] * nums[i] * nums[i]);
// }
// console.log(nums)
// console.log("the last array cube in here", result);


//----------

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const r6 = map(nums, square);
// const r7 = map(nums, cube);

// const square = (z) => {
//      return z * z;
//    };
   
//    const cube = (z) => {
//      return z * z * z;
//    }
//    const map = (arr, fn) => {
//      const result = [];
//      for (let i=0; i<arr.length; i++) {
//        result.push(fn(arr[i]));
//      }
//      return result;
//    };
//-----1---1-1-1-

// const add = (x, y)=>{
//   return x + y;
// }
// const sub = (x, y)=> {
//   return x - y;
// }
// const mul = (x, y)=> {
//   return x * y;
// }
// const div = (x, y)=> {
//   return x / y;
// }

// const result = apply(2, 3, mul);
// console.log(result);
//-----------------------------

// const apply = (a, b, fn) => {
//   const val = fn(a, b);
//   return val;
// }

// const add = (x, y) => {
//   return x + y;
// }
// const sub = (x, y) => {
//   return x - y;
// };
// const mul = (x, y) => {
//   return x * y;
// };
// const div = (x, y) => {
//   return x / y;
// }

// const result = apply(2, 3, mul);
// console.log(result);

//---------------

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = nums[0];
// for (let i=1; i<nums.length; i++){
//   result += nums[i];
//   console.log(result);
// }
// console.log("\nthe total result is: ", result);

//--------------
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const r1 = reduce(nums, add);
const reduce = (arr, fn) => {
  let result = arr[0];

  for (let i=1; i<arr.length; i++) {
    result = fn(result, arr[i]);
  }
  return result;
}
//const r5 = reduce(nums, add);
console.log(r1);