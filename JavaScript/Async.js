function loadingData(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("1) loading Data");
            resolve();
        }, 2000);
    })
    
}
function collectingData(){
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            console.log("2) collectionData");
            resolve();
        }, 2000);
    })
    
}
function approvingData(){
    console.log("3) approving Data");
}
function approved(){
    setTimeout(() => {
        console.log("4) approved Data");
    }, 4000);
    
}


// loadingData().then(collectingData).then(approvingData).then(approved);

async function ex2(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}

ex2().then().catch(err => console.error(err));