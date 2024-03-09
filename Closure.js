function outside(){
    var a = 1;
    function inside(){
        console.log(a);
    }
    inside();
}
outside();    