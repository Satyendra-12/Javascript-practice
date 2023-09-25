// var x;
// console.log(x);

// function x(){
//     var a =3;
//    setTimeout( function y(){
//         console.log(a);
//     },3000);
//   console.log("hello");
   
// }
// x();


// map function
// const arr = [2,4,5,6,7];
// function findMulti(x){
//   return x*2;
// }

// console.log(arr.map(findMulti));

const arrr = [1,2,3,4,5,6,7,8,9];
function findOdd(x){
  return x%2;
}

console.log(arrr.filter(findOdd));

// const arrrr = [3,4,5,7,8,9,10,11,12,13,];
// function isEven(x){
//   return x%2===0;
// }
// // console.log(arrrr.filter(isEven));
// 
// console.log(arrrr.filter(function isEven(x){
//   return x%2===0;
// })
// );


// console.log(arrrr.filter((x)=> x%2===0)
// );



const ar = [3,5,6,7,8]
function double(x){
    return x*2
}
function odd(x){
    return x&1
}
console.log(ar.map(double))
console.log(ar.filter(odd))