let num =[10,20,35,16,25,60];

//map
// let a = num.map((val) => {
//     return val + 10;
// })
// console.log(num);
// console.log(a);

//filter
// let a = num.filter((val)=>{
//     if(val>=10 && val<=25){
//         return val;
//     }
// })

// console.log(a);
// console.log(num);

//Reduce
var sum = num.reduce(function(acc,number){
    return acc+number;
},0);

console.log(sum);