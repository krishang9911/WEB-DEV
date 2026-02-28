// HTMLCollection
//  Collection of HTML elements in the DOM
//  Array-like object but not an actual array
//    SO, we can't apply any array methods(map(), forEach() etc.)
//       directly
//  LIVE --- Gets Updated automatically if there is any change in DOM


//  Jab hamne kaha ki array-like object hai
//   iska matlab kuch to similarities hongi na
//       SIMILARITIES WITH ARRAY
//          Indexed like an array
//          Also has length


//  RETURNED BY
//    getElementsByTagName()
//    getElements ByClassName()
//    children


const collection = document.getElementsByTagName("h2");
console.log(collection);

// Array
//   A non-primitive data type(reference data type) in JS
//   An ordered list of elements
//   STATIC --- Does not get updated automatically
//   Supports built-in methods like map(), reduce(), filter()

let arr = [1, 2, 3, 4];
console.log(arr);

