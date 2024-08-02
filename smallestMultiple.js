const smallestMultiple = (n) => {
    let multiple = BigInt(1);
    for (let i = BigInt(2); i <= BigInt(n); i++) {
        multiple = lcm(multiple, i);
    }
    return multiple.toString();
}

const gcd = (a, b) => {
    if (b === BigInt(0)) return a;
    return gcd(b, a % b);
}

const lcm = (a, b) => {
    return a * b / gcd(a, b);
}

//casos de prueba

console.log(smallestMultiple(5)); // 60
console.log(smallestMultiple(7)); // 420
console.log(smallestMultiple(10)); // 2520