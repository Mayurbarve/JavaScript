//First object
var obj1 = {
    Fname: "jenifer",
}
//Second object
var obj2 = {
    Lname: "Lwarence",
}
// This is Proto
obj2.__proto__= obj1;

//call the object
console.log(obj2)

//Method 2
var obj3 ={
    Fname: "Parth",
}

obj4 = Object.create(obj3);

console.log(obj4);