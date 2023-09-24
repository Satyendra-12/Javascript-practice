

var c =44
if (true) {
  let a = 22; // block scope can't reinitialize and can't be updated
  const b = 23; // block scope can't reinitialize
  var c = 54; // global scope
}

// console.log(a); // giving error a not defined
// console.log(b);    // giving error b not defined
console.log(c); 