// Asynchronous JavaScript

// JS is Synchronous it mean it execute one by one

console.log("Hello")

//setTimeout allow you to print the code whenever you want
//by using time 
setTimeout(()=>{
    console.log("meow");
},2000);

console.log("mine");

//method to define the function
setTimeout(fun, 4000)

function fun(){
    console.log("Mayura");
}