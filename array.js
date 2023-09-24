let array = [3,5,6,7,7,8,"satyendra", true];
console.log(array);
array.push(88)
console.log(array);
console.log(array.pop());
let arr1 =[3,5,6,7,8]
arr2 = array.concat(arr1)
console.log(arr2)
array.shift()
console.log(array)
array.unshift(4)
console.log(array)
console.log(array.includes("satyendra"))
let a = array.join()
console.log(a)
console.log(typeof(a))

console.log("a",array)
console.log(array.slice(1,3))
console.log('b',array)
console.log(array.splice(1,3))
console.log('c',array)