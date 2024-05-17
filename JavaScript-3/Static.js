class wishme{
    constructor(name){
        this.name = name;
    }

    static sayHi(){
        console.log("hello " + this.name);
    }
}

let wish = new wishme("Sakshi")
wish.sayHi()
console.log(wish);