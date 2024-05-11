// This keyword are used to get value from Defind object.
//you can also use obj name rater than this to get values.
var obj = {
    Fname: "Mayur",
    age: 21,
    fun: function () {
        console.log(this.Fname);
    }
}

obj.fun();

//if "this" are used outside the object then it called the windows object
console.log(this);