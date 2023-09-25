// this keyword return the corrent context
const object ={
    username: "satyendra Kumar",
    age: "16",
    location: function(){
        console.log(`${this.username} is living in Noida`)
    }
}
object.location()
object.username = "Rahul Kumar"
object.location()

const chai =()=>{
    let username = "satyendra Kumar"
    console.log(this)  // return empty {}
}
chai()