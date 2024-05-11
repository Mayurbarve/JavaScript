//"new" keyword are use if you create the function and new Variable in it
//then using in window object it find the calling value but it not find in
//window object, for this it will assign the new value in window objet
//using "new"

function fun(){
    let Fname = "Mayura";
    //Assign the Empty object to defind value ex. Fname (2)
    this.fname = Fname;
}

//Create empty object using "new" (1)
//console.log(new fun());

var obj = new fun()
console.log(obj.fname)