//Call Bind Apply
function fun(age) {
    console.log(this.Fname, age, this.gender)
}

var obj1 = {
    Fname: "Sakshi",
    gender: "Female"
}

var obj2 = {
    Fname: "Mayur",
    gender: "Male"
}
fun.call(obj2, 22);

//Apply is just same as call but the difference is the parameters 
//are written in square bracket
fun.apply(obj1, [22]);

//Bind are use to bind the value in one function 
//it will create a function
var bind = fun.bind(obj1, [22]);
console.log(bind);