// Constructor function technically are regular function. there are two converted though:

//there are named with.capital letter first.
//They should be executed only with "new" operator.

function User(name){
    //Second Method to create new obj using if
    //if(!new.target){
        //return new User(name); }
    this.name=name;
}

// 
let person =new User("Jack")
console.log(person.name)