// call return the current execution context to another function

function SetUserName(userName) {
    this.userName = userName;
    console.log("called")
}

function User(username, email, password) {
    // SetUserName(username); this is called but we are not holding it's execution context is deleteing after execution
    SetUserName.call(this,username);
    this.email = email;
    this.password = password;
}

const data = new User("Ram" , "ram@gmail.com", "password")
console.log(data);