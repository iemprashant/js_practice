// let  and const difference

console.log(typeof undefined); // undefined
console.log(typeof null); //Object

// operations

// let value = 3;
// let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3); //x is to the power y
// console.log(2 / 2);
// console.log(2 % 2);

// let str1 = "Namaste "
// let str2 = "Coder"
// console.log(str1 + str2);

// console.log("1" + "2");
// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true);
// console.log(+true);
// console.log(+"");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);

// **************************** Memory *****************************"

// memory allocation in javascript

// Stack(Primitive) Heap(Non-Primitive)

// let myName = "XYZ";
// let fullName = myName; // In stack value copy is created
// fullName = "XYZ ABC";

// console.log(myName); // XYZ
// console.log(fullName); //XYZ ABC

// let userOne = {
//   email: "usermail@gmail.com",
//   upi: "user@ybl",
// };

// let userTwo = userOne; // Heap(Non-Primitive) value reference is assigned

// userTwo.email = "abc@gmail.com"; // Reference value is updated

// console.log(userOne.email);

let myName = "XYZ";
let fullName = myName;
fullName = "XYZ ABC";

let userOne = {
  email: "usermail@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "abc@gmail.com";

console.log(myName);
console.log(fullName);
console.log(userOne.email);
console.log(userTwo.email);


