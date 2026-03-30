// A promise is a JavaScript object that represents the eventual completion or
// failure of an asynchronous operation and its resulting value

// Three states
// 1) pending
//    i) Initial state of a promise
//    ii) No result can be obtained


// 2) rejected
//    i) Represents failure of the asynchronous operation
//    ii) Returns error or failure message

// 3) resolved(or fulfilled)
//    i) Represents successful completion of asynchronous operation
//    ii) Returns the result(value) of the operation

let promise = new Promise(function(resolve, reject){
    let success = true;
    if (success) {
        resolve("Operation successful");
    }else{
        reject("Operation failed");
    }
})

// Promise consumer methods
//  These are the methods that are used the handle the result 
//  after a promise is completed

// 1. .then()
//    Used to handle the successful result of a promise
//    Used when promise s resolved/fulfilled

promise.then((result) => {
    console.log(result);
})

// 2. .catch()
//     Used when promise is rejected
//     Receives the error

promise.catch((error) => {
    console.log(error);
})

// 3. .finally()
//    Used to run some code regardless of success or failure
//    Runs always, whether resolved or rejected

promise.finally(() => console.log("Operation completed"))

// .then()  Handles successful result
// .catch() Handles error
// .finally() Execution after completion