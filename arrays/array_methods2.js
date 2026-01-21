// map(), reduce(), filter()

// .map() method
//    Creates a new array by applying a function to each element of an existing array
//    Does not modify the original array, instead returns a new array with the 
//    transformed elements

// let nums = [1, 2, 3, 4]
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
// let result = nums.map((num)=>num*2);
// console.log(result);

// filter()
//   Creates a new array containing only those elements of an existing array
//   that pass a specific test

// How it works or what it does basically:
//   Goes through every element of the array and keeps only those elements that
//   return true from the test function

// let arr = [1, 2, 3, 4]
// function isEven(num){
//     return num % 2 === 0;
// }
// let result2 = arr.filter(isEven);
// console.log(result2); // [2, 4]



// function isOdd(num){
//     return num % 2 === 0;
// }
// let result2 = arr.filter(isOdd); // [1, 3]
// console.log(result2)  // [1, 3]


// let result2 = arr.filter(function(num){
//     return num % 2 === 0;
// })
// console.log(result2)  // [1, 3]


// reduce()
//   Used to iterate over all the elements of an array
//      and reduce them to a single value
//   Does not modify the original array

let array = [1, 2, 3, 4, 5]

// We want to find the sum of all these elements

// Using a function which uses for loop:
// function findSum(arr){
//     let sum = 0;
//     for (let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findSum(array))

// Now, using reduce()

// let result = array.reduce(function(acc, curr){
//     acc = acc + curr;
//     return acc;
// }, 0)

// or
// let result = array.reduce((acc, curr)=>{
//     acc = acc + curr;
//     return acc;
// }, 0)
// console.log(result);



// finding max


// Using function which utilizes for loop
function findMax(arr){
    let max = arr[0];
    for (let i=0; i<arr.length; i++){
        if (max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(array))

// Now, using reduce()
let max = array.reduce((max, curr)=>{
    if (max<curr){
        max = curr;
    }
    return max;
}, array[0])








