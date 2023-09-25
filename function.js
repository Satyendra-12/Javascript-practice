// function sum( v1, v2){
//     let result = v1+v2

//     console.log(result)
// }
// sum // function define
// // sum(2,3)  // function execute
// let result = sum(4,4)
// console.log(result) // it will print undefined coz fun not return anything

// function sum( v1, v2){
//     // let result = v1+v2
//     // return result
//     return v1+v2
// }
// let result = sum(4,4)
// console.log(result) 

// function greet(username = "Amar"){
//     return `${username} , good morning`
// }
// console.log(greet("satyendra"))
// console.log(greet())

// obj passing in function
const obj = {
    username: "satyendra",
    age: 22
}

function returnObject(user){
    console.log(`my name is ${user.username} and i am ${user.age} year old`)
}

// returnObject(obj)
returnObject({
    username: "satyendra Kumar",
    age: 21
})


// array passing in a function
const arr = [54,63,65]
function printArray(arr){
    console.log(`${arr}`)
}
// printArray(arr)
// printArray(arr[2])
printArray([33,45,56,97])

// arrow function 
const add = (a,b) => {
    return a+b
}
console.log(add(4,5))

const add1 = (a,b) => a+b  // implicit return don't need to write {} and return keyword
console.log(add1(84,50))

const add2 = (a,b) => (a+b)  
console.log(add2(841,510))

const objj = () => ({name:"satyendra"})  
console.log(objj())


// const obb = {
//     userEmail : "vdav",
//     age: 47
// }
// function returnObb(user){
//     console.log(`my email: ${user.userEmail} and age: ${user.age}`)
// }
// returnObb(obb)