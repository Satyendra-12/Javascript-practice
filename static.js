class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username: ${this.username} logged in`);
    }

    static userId(){
        return '423'
    }
}
const obj = new User('satyendra')
obj.logMe();
// console.log(obj.userId())  can't access this function

class Teacher extends User{
constructor(username, email, password){
    super(username)
    this.email = email
    this.password = password
}
}

const obj1 = new Teacher('iphone','iphone@gmail.com','password')
console.log(obj1)
// console.log(obj1.userId())  //can't access this function