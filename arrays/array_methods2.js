// map(), reduce(), filter()

// .map() method
//    Creates a new array by applying a function to each element of an existing array
//    Does not modify the original array, instead returns a new array with the 
//    transformed elements

let nums = [1, 2, 3, 4]
// function double(num){
//     return num*2;
// }
// let result = nums.map(double);
// console.log(result);

// or
// let result2 = nums.map(function(num){
//     return num*2;
// })
// console.log(result2)

// or
let result = nums.map((num)=>num*2);
console.log(result);

// filter()
//   Creates a new array containing only those elements of an existing array
//   that pass a specific test

// How it works or what it does basically:
//   Goes through every element of the array and keeps only those elements that
//   return true from the test function

let arr = [1, 2, 3, 4]
function isEven(num){
    return num % 2 === 0;
}
let result2 = arr.filter(isEven);
console.log(result2); // [2, 4]



function isOdd(num){
    return num % 2 === 0;
}
let result3 = arr.filter(isOdd); // [1, 3]
console.log(result3)  // [1, 3]



