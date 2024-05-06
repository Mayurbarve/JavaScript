let num=[20,45,67,23,45];

console.log(num);

//Calling method one using foreach function
num.forEach((value) =>{
    console.log(value);
});

// //Method using For loop
for (let i =0 ; i< num.length; i++){
    console.log(num[i]);
}

//method Using function
let arr = num.forEach((val, ind) =>{
    // return val;
    console.log(val);
});
console.log(arr);
//Its undefind becouse it store in only aone array
//for using this just use map method as follow example

let a = num.map((val, ind) =>{
    return val;
});
console.log(a);

