// A "Symbol" represented a unique identifier.

let symb = Symbol("Name")
//use toString for Print the string
console.log(symb.toString());

//Use description for specifi inner value 
console.log(symb.description);

//if we create same symbol identifier with same value
//then it shows the false cause value should be a unique
let sym = Symbol("Name")
let sym1 = Symbol("Name")

console.log(sym == sym1); //false

//Assign the value to the symbol
let id = Symbol("id");
let obj = {
    name: "Mayur",
    age: 22,
    [id]: 1
}

console.log(obj);
//but it did't print the vale to symbol using console.log(obj.id);
//so, it use conosle.log(obj.[id]); // then it will print 1

//get keys using for 
for(let key in obj){
    console.log(key);
}
//It print only name and age but it not print symbol 
//cause "Symbol" is hidden property 