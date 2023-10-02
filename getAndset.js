class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    set password(value){
        // this.password = value;           // through error maximum call stack limit exceed
        this._password = value;  
    }
    get password(){
        // return `${this.password}`;
        return `${this._password}`;
    }
}

const obj = new  User("Satyendra", "satye@gmail.com","6454sww")
// console.log(obj)
// console.log(obj.username)
console.log(obj._password)