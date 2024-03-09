function LoadingData(){
    console.log("processing"); 
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            console.log("1. Loading Data...");
            resolve();
        },2000);
    })
}

function CollectingData(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("2. Collection Data...");
            resolve();
        },2000);
    })
}
//reject 
function ApprovingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3. Approving Data...");
            reject("Not Fullfilled");
        },1000)
    })
}

function Approved(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("4. Approved Data");
            resolve();
        },1000)
    })
}

//Calling Function
// LoadingData().then(CollectingData)
// .then(ApprovingData).then(Approved).catch((err)=>{
//     console.log(err);
// })

//Async await
async function AsyncAwait(){
    await LoadingData();
    await CollectingData();
    await ApprovingData();
    await Approved();
}

AsyncAwait().catch((err) =>{
    console.log(err)
});