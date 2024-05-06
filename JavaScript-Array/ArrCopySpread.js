let arr = ['mayur', 4 ,true];
let arr1 = arr.slice(0).concat('item');

arr1.push('Developer')
console.log(arr);
console.log(arr1);


//using Spread
let arr2 = ['Skashi', 12 ,true];
let arr3 = [...arr2]

arr3.push('Data Scientist ')
console.log(arr2);
console.log(arr3);
