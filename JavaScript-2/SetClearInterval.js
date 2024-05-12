//The setInterval() method calls a function at specified intervals (in milliseconds).

//The setInterval() method continues calling the function until clearInterval() is called.

var inter = setInterval(fun, 1000)

function fun(){
    let date= new Date().toLocaleTimeString();
    console.log(date);
}

setTimeout(()=>{
    clearInterval(inter);
},10000)