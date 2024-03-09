// try catch and throw

function Add(a,b){
    try{
        if(b == 0){
            throw new Error("Can't divide by 0");
        }
        else{
            return a/b;
        }
    }
    catch(err){
        console.log(err.message);
    }
}
console.log(Add(10,0));