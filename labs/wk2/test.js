const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = nums.length;
let result = []

const r6 = map(nums, square);
const r7 = map(nums, cube);

const square = (z) => {
     return z * z;
};
   
const cube = (z) => {
     return z * z * z;
}

const map = (arr, fn) => {
     const result = [];
     for (let i=0; i<arr.length; i++) {
       result.push(fn(arr[i]));
     }
     return result;
};
