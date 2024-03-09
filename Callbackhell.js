function loadingData(callback){
    setTimeout(() =>{
        console.log("1. Loading Data....");
        callback();
    },2000)
   
}

function CollectingData(callback){
    setTimeout(() => {
        console.log("2. Collection Data....");
        callback();
    },3000)
    
}

function ApprovingData(callback){
    setTimeout(() =>{
        console.log("3. Approving Data....");
        callback();
    },3000)
    
}

function Approved(callback){
    setTimeout(() =>{
        console.log("4. Approved Data");
        callback;
    },3000)
}

//Callback Hell
loadingData(function(){
    CollectingData(function(){
        ApprovingData(function(){
            Approved();
        });
    });
});

