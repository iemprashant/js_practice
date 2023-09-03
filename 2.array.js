// resizable and can have mix of data types

// JavaScript array-copy operations create shallow copies.
//  (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

//Array methods

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

array.push(12);
array.pop();

console.log(array);
array.unshift(-1); // Insert element at the start of the array
console.log(array);
array.shift();
console.log(array); // Remove element at the start of the array

console.log(array.includes(9)); //returns boolean true

const newArr = array.join();
console.log(newArr);
console.log(typeof newArr); // String -> join converts array to string

// Slice -> dont consider the last index [i,n) &  no change in original array.

// Splice -> consider the last index [i,n] &  change in original array.

const arr1 = array.slice(1, 3);
console.log(arr1);
console.log("original array", array);

const arr2 = array.splice(1, 3);
console.log(arr2);
console.log("original array", array);

const a1 = [0, 1, 2, 3];
const a2 = [4, 5, 6];

console.log(a1.concat(a2));
// returns the array with combination of both

// Alternate is spread operator.

const bigArray = [...a1, ...a2];
console.log(bigArray);

const crazyArray = [1, 2, 3, [4, 5], 6];

console.log(crazyArray.flat(Infinity));
// We can pass depth to the flat function

Array.isArray("Array"); //false
console.log(Array.from("Array"));
//[ 'A', 'r', 'r', 'a', 'y' ]

console.log(Array.from({ user: "abc" }));
// returns []

console.log(Array.of(1, 2, 3, 4));
// return [ 1, 2, 3, 4 ]
