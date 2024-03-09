function Person(name,age){
    let person = Object.create(Person.prototype)
    person.name = name;
    person.age = age;
    return person
}
   
Person.prototype.greet = function (){
        console.log(`hello ${this.name}`)
    }

let user = Person ("john", 8)
user.greet()
console.log(user)

