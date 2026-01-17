// Higher Order Function is a function which
// 1) Takes a function as input
//  or
// 2) Returns a function as output

// Taking a function as input(argument)
function higherOrderFunction(callback){
    let name = "Rahul";
    callback(name);
}

function sayHello(name){
    console.log("Hello " + name)
}
higherOrderFunction(sayHello)

// Returning another function as output
function makeMultipier(multiplier){
    return function(number){
        return number * multiplier;
    }
}

// Using it

const double = makeMultiplier(2) 
const triple = makeMultiplier(3) 

console.log(double(5)) // 10
console.log(triple(5)) // 15

// How this works 
// First, we declared a Higher order function makeMultiplier
// This function has a parameter - multiplier
// When we call this function in line 26 and 27, what it does is
// It return the anonymous function which we declared inside it 
// And inside this anonymous function, the the variable multiplier gets the value we passed
// into makeMultiplier function while calling it
// These anonymous functions with different values of variable-multiplier
// get assigned to variables double and triple
// Then we call these anonymous functions using the variable names in which they got stored
// and logged the value they returned

