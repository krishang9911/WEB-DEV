// Switch statement is a control structure that selects and exceutes a block 
//  of code from multiple options based on the value of an expression


// Working
//  It compares the expression with case value and runs the matching
//  block. 
//  Runs default block is no case matches
//   deafult is like  the 'else' block 

// USAGE
//  Can be used in place of multiple  if - else if  blocks 
// WHYY???

//  Because, provides a CLEANER and more READABLE alternative to 
//  mutliple if - else if blocks

// NOTE: Uses STRICT EQUALTY internally


let day = 1
switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("invalid day");
}

let no_of_children = 2;
switch(day){
    case 1:
        console.log("Less children");
        break;

    case 2:
        console.log("Good");
        break;
    
    case 3:
        console.log("One less for ludo");
        break;
    
    case 4:
        console.log("Can play ludo or carromboard");
        break;

    case 5:
        console.log("One child always has to miss out on the carrom game");
        break;

    case 6:
        console.log("Should stop now");
        break;
    
    case 7:
        console.log("Too much romance");
        break;

    default:
        console.log("This couple has a lot of kids");
        break;
}

// switch statement uses STRICT EQUALITY INTERNALLY
//  If we do

day = 3
switch(day){
    case "1":
        console.log("Moday");
        break;
    case "2":
        console.log("Tuesday");
        break;

    case "3":
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
        break;
}

// Here, the default case will run
//  Because of strict equality being used

// Use of break statement
