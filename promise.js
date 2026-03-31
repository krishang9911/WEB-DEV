// Callback Hell
//  In asynchronous JavaScript Programming, callbacks are often
//   nested inside one another to perform asynchronous operations
//    sequentially.
//  Problem: This leads to a CALLBACK HELL, where the code is
//            difficult to read, maintain and debug

//  ALSO CALLED THE PYRAMID OF DOOM

function task1(callback){
    console.log("Task 1 completed");
    callback()
}

function task2(callback){
    console.log("Task 2 completed");
    callback()
}

function task3(callback){
    console.log("Task 3 completed");
    callback();
}

function finalTas(){
    console.log("final task also completed");
}

task1(function(){
    task2(function(){
        task3(function(){
            finalTask();
        });
    });
});

// A promise is used to solve this problem
//  The problem of callback hell

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

// Promise consumer met completedhods
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