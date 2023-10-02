// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername(){
//     return `${this.username.toUpperCase()}`
//   }
// }

// const chai = new User("chai", "chai@gmail.com", "4543");
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

function User(username, email,password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.username.toUpperCase()}`
}

User.prototype.changeUsername = function(){
    return `${this.password}ghy`
}


const tea = new User("tea","tea@gamil.com",'6454')
console.log(tea)
console.log(tea.encryptPassword())
console.log(tea.changeUsername())