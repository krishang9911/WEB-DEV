// Closure is a function that remembers and accesses variables from its
//  outer scope even after the outer function has finshed execution

// Allows data encapsulation and privacy
// Commonly used in callbacks and asynchronous code

function outer(){
    let count = 0;
    function inner(){
        count++
        console.log(count);
    }
    return inner;
}

innerFunction = outer()
innerFunction();
innerFunction();
innerFunction();

// Closures Rely on Lexical Scoping which means that a function's scope is
//  decided by where it is defined, not where it is executed. 
//   This allows the inner function to access variables form its outer function
