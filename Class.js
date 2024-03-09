//Class and Object
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
}
let user = new Person ("john", 18)
user.greet();
console.log(user);

//Simple Class
class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log("Hello " + this.name);
    }
}

let cust = new User("Mayur")
cust.sayHi()

let cust1 = new User("Vaibhav")
cust1.sayHi()

console.log(typeof User);