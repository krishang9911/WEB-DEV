// Types of functions

// 1. Regular function

// function sample(a){
//     console.log(a, "sample")
// }
// sample(5)

// 2. arrow function (also called fast class function)

// const sample = ()=>console.log("sample")
// sample()

// const sample = ()=>"sample"
// console.log(sample())

// Advantages
// asynchronous: can continue with the rest of the program
//  before finishing execution completely
//  Therefore, fast

// Doesn't need return statement in same line

// Callback function: a function passed to another function as an argument and later
//                    called(executed) inside that function

// Here, the code didn't go as we expected
// function sample(callback){
//     console.log("sample");
// }

// function demo(){
//     console.log("demo");
// }

// sample(demo())  
//output
// demo
// sample

// function sample(callback){
//     console.log("samole");
//     callback()
// }

// function demo(){
//     console.log("demo")
// }
// sample(demo)





