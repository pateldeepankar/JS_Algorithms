// function fibonacci(num){
//     var n1 = 0;
//     var n2 = 1;
//     sum = 0;
//     for(let i = 2; i< num; i++){
//         sum = n1 + n2;
//         console.log(" "+sum);
//         n1= n2;
//         n2 = sum
//     }
// }
// console.log(fibonacci(8));
// console.log(fibonacci(10));

function fibonacci(n){
    const fib = [0,1];
    for(let i = 2; i < n ; i++){
        fib[i] = fib[i-1] + fib [i-2]
    }
    return fib
}
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(9));
console.log(fibonacci(12));