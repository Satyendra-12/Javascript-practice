let array = [3,5,6,7,7,8,"satyendra", true];
console.log(array);
array.push(88)
console.log(array);
console.log(array.pop());
let arr1 =[3,5,6,7,8]
arr2 = array.concat(arr1)  // concate always return a new array
console.log(arr2)
array.shift() // remove elements from starting index
console.log(array)
array.unshift(4) // add element at start of array  
console.log(array)
console.log(array.includes("satyendra"))
let a = array.join()
console.log(a)
console.log(typeof(a))

console.log("a",array)
console.log(array.slice(1,3)) // not change actual array and range will not be included
console.log('b',array)
console.log(array.splice(1,3)) // change actual array and range will be included
console.log('c',array)

let marval = ["ironman", "thor", "loki"]
let dc = ["batman", "flash","superman"]
// marval.push(dc)
console.log(marval)
let all_heroes = marval.concat(dc)
console.log(all_heroes)

let spr = [...marval, ...dc]
console.log(spr)

let p =193
let q =99
let r = 22
console.log(Array.of(p, q, r))

let name = 'Satyendra'
console.log(Array.from(name))
