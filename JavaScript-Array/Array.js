//Array

let num = [10,20,30,40,50,60];

//Splice Method
let a = num.splice(1,4);
console.log(a);

//Slice Method
let arr = [10,20,30,40,50,60,10];

let b = arr.slice(1,4);
console.log(b);

//Array into String
console.log(arr.toString());
console.log(typeof arr.toString());

//Use of filter
let arra = arr.filter((val,ind,arr)=>{
    if (val>=10 && val<=35){
        return val;
    };
});

console.log(arra)

//find Element Index 
let fun = arr.findLastIndex((val)=>{
    return val==10
});
console.log(fun);

//Split & array
let num1 = '12,45,04';
let num2 = num1.split(',');

console.log(num2);

num2.forEach(ele =>{
    console.log(ele);
});


//Use of IN OF
let arrr = [10,20,30,40,50];

for(let ar in arrr){
    cnsole.log(ar)
}