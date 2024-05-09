let arr =[
    {user:1,name:"Mayur"},
    {user:2,name:"Sakshi"},
    {user:3,name:"Jaynt"}
]

console.log(arr);
console.log(arr[0]);

for (let i in arr){
    console.log(arr[i])
}
for (let i of arr){
    console.log(i.name);
}

let[item1,item2, {name}]=arr;

console.log(item1);
console.log(item2);
console.log(name);