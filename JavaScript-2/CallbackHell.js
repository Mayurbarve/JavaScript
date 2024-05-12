//Callback Hell is essentially nested callbacks stacked below one
//another forming a pyramid structure. Every callback depends/waits
//for the previous callback, thereby making a pyramid structure that
//affects the readability and maintainability of the code. 

function LoadingData(callback) {
    setTimeout(() => {
        console.log("1: Laoding Data...");
        callback();
    }, 5000)
}

function CollectingData(callback) {
    setTimeout(() => {
        console.log("2: Colllecting Data...");
        callback();
    }, 4000)
}

function approvingData(callback) {
    setTimeout(() => {
        console.log("3: Approving Data...");
        callback();
    }, 3000)
}

function approved() {
    console.log("4: Approved");
}


//Callback hell
LoadingData(function () {
    CollectingData(function () {
        approvingData(function () {
            approved();
        });
    });
});
