// "Recursion" is use to call itself

//Ex. print 1 to 10 
// for (let i =1; i <=10; i++){
//     console.log(i)
// }

function PrintNumbersRecursive(n) {
    if (n <= 10) {
        console.log(n);
        PrintNumbersRecursive(n + 1)
        //It will repeat the function until the value are not = = to 10;
    }
}
PrintNumbersRecursive(1);

//Factorial using Recursio
// 5 = 5*4*3*2*1 = 120
// 4 = 4*3*2*1 = 24

function Factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * Factorial(n - 1);
    }
}

console.log(Factorial(5)) //120