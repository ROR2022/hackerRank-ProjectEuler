const sumEvenFiboNums = (num) => {
    let a = BigInt(1);
    let b = BigInt(2);
    let sum = BigInt(0);
    let n=BigInt(num);
    while (b <= n) {
        if (b % BigInt(2) === BigInt(0)) {
            sum += b;
            //console.log(b)
        }
        const temp = a;
        a = b;
        b = temp + b;

    }
    return String(sum);
}

//casos de prueba

console.log(sumEvenFiboNums(10)); // 10
console.log(sumEvenFiboNums(100)); // 44
//console.log(sumEvenFiboNums(4000000)); // 4613732
//console.log(sumEvenFiboNums(8000000000000000000000000)); // 4613732
//console.log(sumEvenFiboNums(100000000000000000000000000000000000)); 