fetch("text.txt")
.then(response =>{
    if(!response.ok){
        throw new Error('API not response')
    }
    return response.text()
})
.then(data=> console.log(data))
.catch(error  => console.log(error))