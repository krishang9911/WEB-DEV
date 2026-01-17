// Function declaration is a way to define named functions in JavaScript
// It is one of the most common and traditional ways to create a new function
// in JavaScript

function greet(name){
    console.log("Hello "+name);
}
greet("Krish");   // function call

function add(x, y){
    console.log(x+y);
}
add(2, 5);
// Difference between function declarations and function expressions is
// 1) NAME: Function declarations are always named but function expressions can be
//    named or anonymous as well.
// 2) HOISTING: Function declaration can be called before it's defined but
//    function expression can't be called before it's defined. It will cause Error
// 3) USE: Function declarations are used in helper/ utility functions
//         function expressions are used in callbacks, eventlisteners etc.
// 4) REUSE: Function declarations can be reused or called anytime 
//          function expressions can be reused iff they are assigned to 
//          a variable
