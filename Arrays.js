/*
let heroes = ["Ironman", "Thor", "Hulk", "Spiderman", "Antman"]

//for loop
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

//for of
for(let hero of heroes){
    console.log(hero.toUpperCase());
}
*/

let marks = [85, 97 ,44, 37, 76, 60];

let sum = 0;
for (let val of marks){                                                                                                                                                                                                                
    sum += val;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);