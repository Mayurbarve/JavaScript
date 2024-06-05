function Add(a, b) {
    try {
        if (b == 0) {
            throw new Error("Can't Divide by 0")
        }
        else {
            console.log(`Result is ${a / b}`);
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

Add(10,0)