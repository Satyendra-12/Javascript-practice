// child function can access the variable of parent function that's called the clouser 

function parent(){
    const username = "Satyendra"
    function child(){
        const age =12
        console.log(age,username)
    }
    child()
}
parent()

if(true){
    const a = "kumar"
    console.log("i am parent ")
    if(a==="kumar"){
        console.log(a)
    }
}