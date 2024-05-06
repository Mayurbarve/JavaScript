// Multidimentional array
let arr = [
    ['john',30],
    ['thomas',28],
    ['robert',33]
];
console.log(arr);
console.log(arr[1]);
console.log(arr[2][1]);

for (let i =0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        console.log(arr[i][j]);
    }
}
    
//Using forEach
arr.forEach(data=>{
    data.forEach(val =>{
        console.log(val);
    })
})

//Using Of 
for (let ar of arr){
    for( i of ar){
        console.log(i);
    }
}