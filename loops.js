// for(let i=0; i<10; i++) {
//     if(i==5){
//         console.log("5 is best number");
//         break;
//     }
//     console.log(i);
    
// }


// for(let i=0; i<10; i++) {
//     if(i==5){
//         console.log("5 is best number");
//         continue;
//     }
//     console.log(i);
    
// }

// for of loop - it doesn't work with objects

// const arr = [3,4,5,8,0,2];
// for (const i of arr) {
//     console.log(i);
// }

// const s = "satyendra";
// for(const i of s) {
//     console.log(i);
// };

// map

// const map = new Map();
// map.set('name', 'satyendra');
// map.set('age', 22);
// map.set('dob',"12-02-2001");

// for (const i of map) {
//     console.log(i);    // it will print complete map data  
// }

// for (const [key,value] of map) {
//     // console.log(key, ':' ,value);     
//      console.log(`${key}, : ,${value}`);  
// }

// const obj = {
//     name: "Satyendra",
//     age: 22,
//     dob: "12-09-2001"
// }


// for in loop - it doesn't work with maps

// for (const i of obj) {
//     console.log(i)                        // obj not iterable by for of  loop use for in loop
    
// }

// for (const i in obj) {
//     // console.log(i)   // print onle key

//     // console.log(`${i}: ${obj[i]}`);
//     console.log(i,':',obj[i]);
// }

// const arr1 = [3,5,6,7,8,9,0]
// for (const i in arr1) {
//     // console.log(i) // it will print only key
//     console.log(arr1[i]) 
// }

// for in loop - it doesn't work with maps

// const map1 =  new Map()
// map1.set('js','javascript')
// map1.set('cpp','c++')
// map1.set('c','language')

// for (const i in map1) {
//     console.log(i)
// }


// for each loop 

// const array = [6,4,5,6,7,8,9]
// array.forEach(function (item){
//  console.log(item)
// })

// array.forEach((item)=>console.log(item))


// const array1 =[
//     {
//         languageName:"javascript",
//         fileName:"js"
        
//     },
//      {
//         languageName:"c++",
//         fileName:"cpp"
        
//     },
//      {
//         languageName:"php",
//         fileName:"php"
        
//     },
//      {
//         languageName:"c",
//         fileName:"c"
        
//     }
// ]

// array1.forEach((item, index, array1)=>{
//     // console.log(item) // print all objects
//     // console.log(item.fileName)
//       console.log(item.languageName)
//     // console.log(item, index, array1)
// })