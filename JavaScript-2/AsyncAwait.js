//Async/await is a feature in JavaScript that allows you to work with asynchronous code

function LoadingData() {
    console.log("Processing")
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("1: Laoding Data...");
            resolve();
        }, 5000)
    })
}

function CollectingData() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("2: Colllecting Data...");
            resolve();
        }, 4000)
    })
}

function approvingData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("3: Approving Data...");
            reject("Error: Incorrect Data");
        }, 3000)
    })
}

function approved() {
    console.log("4: Approved");
}



// Async await
async function wait(){
    await LoadingData();
    await CollectingData();
    await approvingData();
    await approved();
}

wait().catch;((err)=>{ console.log(err);})