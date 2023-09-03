const myArray = [1, 2, 3, 4];

// custom forEach function
function customForEach(callback) {
  for (let i in this) {
    callback(this[i], i, this);
  }
}

// adding custom forEach function to array prototype
Array.prototype.customForEach = customForEach;

myArray.customForEach((val) => console.log(val));

// Output is
// 1
// 2
// 3
// 4

// what if we delete a element.
delete myArray[1]; // delete 1 index element.

// When you delete an element from the array using the delete keyword, the element is removed,
// but the property itself remains in the object (array in this case) with a value of undefined.

myArray.customForEach((val) => console.log(val));

console.log("----------->");

myArray.forEach((val) => console.log(val));
// Output is
// 1
// undefined
// 3
// 4
// --------->
// 1
// 3
// 4

// To fix this undefined print value ,we need to make changes in our forEach method

// ***************************** CONCEPT ****************************

// Object.prototype.hasOwnProperty()

// -> The hasOwnProperty() method of Object instances
//    returns a boolean indicating whether this object has the specified property
//    as its own property (as opposed to inheriting it).

// -> Returns true if the object has the specified property as own property; false otherwise.

// -> Ref:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

// ***************************** CONCEPT ****************************

// updated custom forEach function

function updatedCustomForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty()) {
      callback(this[i], i, this);
    }
  }
}

Array.prototype.updatedCustomForEach = updatedCustomForEach;

myArray.updatedCustomForEach((val) => console.log(val));
