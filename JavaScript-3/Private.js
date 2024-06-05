class bankAccount{
    #balance = 0; //# define the private class

    diposite(amount){
        this.#balance += amount;
        console.log(`Diposite amount ${amount}, Total balance ${this.#balance}`);
    }

    withdraw(amount){
        if(amount > this.#balance){
            console.log("Insufficent Balnance");
        }
        else{
            this.#balance -= amount;
            console.log(`Withdraw amount ${amount}, Total Balance ${this.#balance}`);
        }
    }
}

let user = new bankAccount();
user.diposite(100);
user.diposite(200);
user.withdraw(150);