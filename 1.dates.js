let myDate = new Date();

console.log(myDate);
console.log(myDate.toDateString);

console.log(typeof myDate);
// date is an object

let myCreatedDate = new Date(2023, 0, 23);

console.log(myCreatedDate.toDateString);
// Mon Jan 23 2023

// Month in javascript are zero indexed

let myTimeStamp = Date.now();
console.log(myTimeStamp); // value will be returned in milliseconds

let newDate = new Date();
console.log(newDate.getDate());
