class useClass {
    constructor(name,lineup){
        this.name =name;
        this.position= lineup;
    }

    nickname(){
        console.log(`Ckicku aka ${this.name}`);
    }
}

let cricketr =new useClass("Virat Kohli", opener);
cricketr.nickname();
console.log(cricketr);



//Exapmle 2
class wishme{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log("hello " + this.name);
    }
}

let wish = new wishme("Sakshi")
wish.sayHi()
console.log(wish);