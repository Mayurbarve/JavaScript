class Animal {
    constructor(name){
        this.name = name;
    }

    sound(){
        console.log(`${this.name} make a noice`);
    }
}

class dog extends Animal{
    constructor(name){
        super(name);
    }
}

let ani = new dog("Banti");
ani.sound();
