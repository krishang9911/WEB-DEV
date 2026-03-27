// A promise is a JavaScript object tht represents the eventual completion or
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
//    ii) Returns 

let promise = new Promise(function(resolve, reject){
    let success = true;
    if (success) {
        resolve("Operation successful");
    }else{
        reject("Operation failed");
    }

})