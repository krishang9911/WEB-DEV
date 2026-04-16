// Error handling
//   It means that when your code faces a problem,
//    dont let it crash - control it

// try and catch
// try
//   Includes code that might fail
// catch
//   runs code when any error occurs

function checkAge(age){
    if (age<18){
        throw new Error ("You are underage")
    }
    console.log("Access granted")
}

try{
    checkAge(15)
}catch(err){
    console.log(err.message)
}

try{
    console.log("Trying")
}catch(err){
    console.log("err")
} finally{
    console.log("This always runs")
}

