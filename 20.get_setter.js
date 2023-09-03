class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}User`;
  }

  set password(value) {
    this._password = value;
  }
}

const User = new User("h@User.ai", "abc");
console.log(User.email);
