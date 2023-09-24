
// const mySym = Symbol("key1")  // create a symbol add this in an object and print the value

// const obj ={
//     name: "satyendra kumar",
//     [mySym]:"Hi there",
//     age: 22,
//     email: "sa@gmail.com",
//     location: "pilibhit",
//     "hobbie" : "Music listener",
//     "fav place" : "swarg"    // focus here impoertant can't access using . operator 
// }
// console.log(obj)
// console.log(obj.name)
// console.log(obj["name"])
// console.log(obj.hobbie)
// console.log(obj["fav place"])    // here it is how to access it 
// console.log(obj[mySym])


// obj.age = 21
// console.log(obj.age)
// obj[mySym] = "hi there my name is satyendra"
// console.log(obj)
// Object.freeze(obj)     // freeze method changes can't be reflect in original object
// obj.email = "hd@gmail.com"
// console.log(obj)

// obj.greetings = function(){
//     console.log("Good morining")
// }
// console.log(obj.greetings())




// const obj1 ={id1: 1, name1: "amar", age1: 22}
// const obj2 ={id2: 2, name2: "rahul", age2: 12}
// const obj3 ={id3: 3, name3: "sachine", age3:23}
// const obj4 = {...obj1, ...obj2, ...obj3}   // spread operator 
// console.log(obj4)


// destructuring 
const course = {
    name: "web development",
    instructor:"love babbar "
}
const {instructor} = course
console.log(instructor)