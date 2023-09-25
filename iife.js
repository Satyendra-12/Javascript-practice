// imidiately invoked function expression 

// named iife
(function chai(){
    console.log("DB Connected")
})();

// iife using arrow function
(  ()=>{
    console.log("DB Connected two")
})();

(  (name)=>{
    console.log(`${name} database is connected`)
})("mysql")