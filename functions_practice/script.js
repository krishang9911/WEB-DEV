// 1. Sum of two numbers
function sum(a, b) {
  return a + b;
}


// 2. Even or Odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}


// 3. Square
function square(n) {
  return n * n;
}


// 4. Greeting
function greet(name) {
  return "Hello " + name + "!";
}

function maxOfThree(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}


// 6. Reverse string (no built-in reverse)
function reverseStr(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}


// 7. Count vowels
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}


// 8. Factorial (loop)
function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
