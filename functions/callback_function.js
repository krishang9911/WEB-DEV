// Callback function: A function which is passed as an argument to another function
//                   and called(executed) later inside that function

// Normal function(not callback)
function greet(){
    console.log("Hello");
}

// Using Callback function

function mainFunction(callback){
    console.log("Some code");
    callback();  // calling callback_function inside the mainFunction
}
mainFunction(greet);