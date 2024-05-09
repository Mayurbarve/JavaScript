function fun() {
    //lexical scope
    var a = 1;
    console.log("Outer function: " + a);
    function fun2() {
        console.log("Inner Function: + a");
    }
    fun2();
    //Var is not in the fun2 but also it print and get value from its outer funtion is called lexical funtion

}

fun();