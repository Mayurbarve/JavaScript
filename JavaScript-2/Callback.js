// Callback technique that allows a function to call another function after it finishes


function fun(val){
    console.log(val);
}

function add(a,b, Mayura){
    let sum = a+b;
    Mayura(sum);
}

add(5,10, fun)