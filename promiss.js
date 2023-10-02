// const promissOne = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('this is my promiss')
//         resolve()
//     },1000)
// })

// promissOne.then(function(){
// console.log("prommiss done")
// })

//  new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('this is my promiss')
//         resolve()
//     },1000)
// }).then(function(){
// console.log("prommiss done")
// })

// const promissTwo = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('promiss two done')
//         resolve( {username:"satyendra", age:32})
//     },1000)
// })

// promissTwo.then(function(user) {
//     console.log(user.age)
//     console.log(user)
// })

// const promissThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         // let error = true
//         let error = false
//         if(!error){
//             resolve({username:"satyendra", age:32})
//             console.log('promiss done')
//         }
//         else{
//             console.log("something went wrong")
//         }
//     },1000)
// })

// promissThree.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("promiss either resolved or rejected")
// })

// const promissFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // let error = false
//         let error = true
//         if(!error){
//             resolve({username:"satyendra", age:32})
//             console.log('promiss done')
//         }
//         else{
//             console.log("something went wrong")
//         }
//     }, 1000);
// });

// async function consumePromise(){
//     try{
//     const response = await promissFour
//     console.log(response);
//     }
//     catch(error){
//         console.log(error)
//     };
// }
// consumePromise();

// async function getAllUsers() {
// try{
//   const response = await fetch("https://random-data-api.com/api/v2/users");
//   const data = await response.json();
//   console.log(data)
//     }
//     catch(error){
//         console.log('e', error)
//     }
// }
// getAllUsers()

fetch("https://random-data-api.com/api/v2/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
console.log(error)  
})