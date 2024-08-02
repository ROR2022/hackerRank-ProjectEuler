const sumSquareDifference = (n) => {
    let sumSquare = BigInt(0);
    let squareSum = BigInt(0);
    for (let i = BigInt(1); i <= BigInt(n); i++) {
        sumSquare += i * i;
        squareSum += i;
    }
    squareSum *= squareSum;
    return (squareSum - sumSquare).toString();
}