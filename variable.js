// var c =44
// if (true) {
//   let a = 22; // block scope can't reinitialize and can't be updated
//   const b = 23; // block scope can't reinitialize
//   var c = 54; // global scope
// }

// // console.log(a); // giving error a not defined
// // console.log(b);    // giving error b not defined
// console.log(c); 




// function statement - we define a function  on regular basis and can execute it before declaration
console.log(sum(3,4))
function sum(a,b) {
    return a + b;
}
// console.log(sum(3,4))

// function expression - assigning a function to a variable and can't execute it before declaration
// console.log(summ(4,6))
const summ = function(a,b) {
    return a + b;
}
console.log(summ(4,6))