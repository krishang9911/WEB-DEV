// . Function Declaration

// The classic, most straightforward way.

// function greet(name) {
//   return "Hello, " + name;
// }

// ✔ Can be used before it’s defined (hoisting works here).

// 2. Function Expression

// A function stored inside a variable.

// const greet = function(name) {
//   return "Hello, " + name;
// };

// ✔ Not hoisted like declarations
// ✔ Useful when passing functions around

// 3. Arrow Function (ES6)

// Shorter and cleaner syntax.

// const greet = (name) => {
//   return "Hello, " + name;
// };

// Or even shorter:

// const greet = name => "Hello, " + name;

// ✔ No this binding (important in advanced use)

// 4. Anonymous Function

// A function without a name (often used temporarily).

// setTimeout(function() {
//   console.log("Hello!");
// }, 1000);
// 5. Immediately Invoked Function Expression (IIFE)

// Runs instantly after being defined.

// (function() {
//   console.log("Runs immediately");
// })();
// 6. Callback Function

// A function passed as an argument to another function.

// function processUser(name, callback) {
//   callback(name);
// }

// processUser("Alex", function(name) {
//   console.log("Hello " + name);
// });
// 7. Constructor Function

// Used to create objects (before classes were common).

// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("John");
// 8. Generator Function

// Can pause and resume execution.

// function* count() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// 9. Async Function

// Used for asynchronous operations (like APIs).

// async function fetchData() {
//   return "Data received";
// }