function setUserName(userName) {
  this.userName = userName;
}

function createUser(userName, email, password) {
  setUserName.call(this, userName); // pasisng this (context ) to the next function.
  this.email = email;
  this.password = password;
}

const dummyUser = new createUser("abc", "email", "password");
console.log(dummyUser);
