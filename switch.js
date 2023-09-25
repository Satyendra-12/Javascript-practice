// const month =8
// switch(month){
//     case 1: console.log("this is first month");
//     break;
//     case 2: console.log("this is second month");
//     break;
//     case 3: console.log("this is third month");
//     break;
//     default: console.log("galat jagah aa gye bhaiya");
//     break;
// }

// let userEmail = "satyendra@gmail.com";
// if(userEmail){
//     console.log(userEmail);
// }

// let userEmail = "";
// if(userEmail){
//     console.log(userEmail);
// }
// else{
//     console.log("not got email");
// }

let userEmail = [];
if(userEmail){
    console.log("got email");
}
else{
    console.log("not got email");
}

// falsy values
// null, undefined, false, "",0, -0, Bigint,NaN

// truthy values
// " ", {}, "0", function(){},[], 'false'

// const obj = {}
// if(Object.keys(obj).length===0){
//     console.log("Object is empty")
// }

// nullish coalescing operator (??) used for  null and undefined
val1 = 3 ?? 10
console.log(val1)

val2 = null ?? 10
console.log(val2)

val3 = undefined ?? 13
console.log(val3)

// ternary operator 

// condition? true : false

5==3 ? console.log("yes") : console.log("no")

let obj1 = {}

if(Object.keys(obj1).length===0){
    console.log("object is empty")
}