function fun(){
    console.log("Outer Function");
    function fun2(){
        console.log("Inner Function");
    }
    //Calling function inside the function
    fun2();
}

//calling Outer Function 

fun();