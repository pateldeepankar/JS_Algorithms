function fibonacci(num){
    var n1 = 0;
    var n2 = 1;
    sum = 0;
    for(let i = 2; i< num; i++){
        sum = n1 + n2;
        console.log(" "+sum);
        n1= n2;
        n2 = sum
    }
}
console.log(fibonacci(8));
console.log(fibonacci(10));