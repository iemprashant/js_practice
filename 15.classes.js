// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptedPassword() {
//     return `${this.password} encrypted`;
//   }
//   changeUserName() {
//     return this.username.toUpperCase();
//   }
// }

// const dummyUser = new User("abc", "gmail.com", "pass");

// console.log(dummyUser.encryptedPassword());
// console.log(dummyUser.changeUserName());

// behind the scenes

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptedPassword = function () {
  return `${this.password} encrypted`;
};

User.prototype.changeUserName = function () {
  return this.username.toUpperCase();
};

const dummyUser = new User("abc", "gmail.com", "pass");

console.log(dummyUser.encryptedPassword());
console.log(dummyUser.changeUserName());
