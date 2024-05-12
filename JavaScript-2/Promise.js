//Promises to simplify managing multiple asynchronous operations, preventing callback hell and unmanageable code.

//Simple Understanding of Promise
function fun(task){
    return new Promise((resolve, reject)=>{
        if(task){
            resolve("Completed");
        }
        else{
            reject("In Completed");
        }
    })
}

let onResolve =(res)=>{
    console.log(res);
}

let onReject=(err)=>{
    console.log(err);
}

fun(false).then(onResolve).catch(onReject);




// Resolve Callback Hell using Promise

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


// //Callback hell
// LoadingData(function () {
//     CollectingData(function () {
//         approvingData(function () {
//             approved();
//         });
//     });
// });

//promise Calling Function
LoadingData().then(CollectingData).then(approvingData)
.then(approved).catch((err)=>{
    console.log(err);
})