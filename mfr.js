// const arr = ['js','cpp','c', 'ruby','php']

// const values = arr.forEach((item)=>{
//     console.log(item)
// })
// console.log(values)      // for each loop not return anything


//filter

// const arr = [1,2,3,4,5,6,7]
// let a = arr.filter((num)=>num>3)
// console.log(a)


const arr = [
    {
        title:'book 1',
        author: 'Jhon',
        genre:'history',
        published: 2000

    },
    {
        title:'book 2',
        author: 'Jon',
        genre:'Math',
        published: 2001

    },
    {
        title:'book 3',
        author: 'John',
        genre:'science',
        published: 2002

    },
    {
        title:'book 4',
        author: 'Joh',
        genre:'history',
        published: 2003

    },
    {
        title:'book 5',
        author: 'Johny',
        genre:'history',
        published: 2004

    },
    {
        title:'book 6',
        author: 'Jhonn',
        genre:'science',
        published: 2005

    }
]

// const a = arr.filter((bk)=>bk.genre === 'science')
// console.log(a)

//  const array = [2,3,4,5,6,7]
// //  const c = array.map((i)=> i+5)c
// //  console.log(c)


// // chainning
// const b = array.map((i)=>(i+4))
//                .map((i)=>i*2)
//                .map((i)=>i-4)
// console.log(b)

// reduce
const arr1 =[2,3,4]
// const num = arr1.reduce(function (acc, currVal){
// console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc+currVal
// },0)

// using arrow function 
const num =arr1.reduce((acc,currVal)=>{
    console.log(`acc: ${acc} and currVal: ${currVal}`)
    return acc+currVal
},0)
console.log(num)

