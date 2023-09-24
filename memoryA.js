// stack memory - a copy will be created 
let myname = "Satyendra"
let anotherName = myname
console.log(myname)
console.log(anotherName)

anotherName = "amar"
console.log(myname)
console.log(anotherName)

// heap memory - here we will get references 

let obj ={
    name: "satyendra",
    age: 22
}
console.log(obj)

let obj1 = obj

obj1.name = "Amar"
console.log(obj)