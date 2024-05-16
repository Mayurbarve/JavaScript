//Prototype
function usePrototype(name,batting_lineup){
    // let cricketr = Object.create(usePrototype.prototype);
    this.name =name;
    this.postion= batting_lineup;
}

// let obj = {
//     nickname(){
//         console.log(`Hitman the ${this.name}`);
//     }
// }

usePrototype.prototype.nickname = function(){
    console.log(`Hitman aka ${this.name}`);
}

let IndianCricket = new usePrototype("Rohit Sharma", "Opener")
IndianCricket.nickname()
console.log(IndianCricket);