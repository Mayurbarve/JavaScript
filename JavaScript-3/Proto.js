//Proto
var obj = {
    Fname: "Jennifer",
}

var obj2 = {
    Lname: "Lawerence",
}

//Using proto it inherit the object values and object
obj2.__proto__ = obj;


console.log(obj2.Fname);

