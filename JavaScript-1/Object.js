//Javascript Object 

let obj = {
    name:"mayura",
    age:22,
    "working area":"Developer",
    fun: function(){
        console.log("Her Eyes")
    },
    arr:[10,20,30]
}

console.log(obj["working area"]);
// console.log(obj.fun());

obj.fun();
console.log(obj.arr);

//use value as a key using []
let a="key2";
obj.key="item";
obj[a]='item2';
console.log(obj);

//Calling using For of
for(let i of Object.keys(obj)){
    console.log(i);
}
//Calling using For in
for(let i in obj){
    console.log(obj[i]);
}