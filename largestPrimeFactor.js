// Description: Find the largest prime factor of a number
// utilizar BigInt para numeros muy grandes

const largestPrimeFactor= (num) => {
    let n=BigInt(num);
    let i=BigInt(2);
    let factor=BigInt(0);
    while(n>1n){
        if(n%i===0n){
            n=n/i;
            factor=i;
        }else{
            i++;
        }
    }
    return String(factor);
}

//refactorizar el codigo para que sea mas eficiente y rapido en la ejecucion
//utilizar BigInt para numeros muy grandes

const largestPrimeFactor2= (num) => {
    let n=BigInt(num);
    let i=BigInt(2);
    let factor=BigInt(0);
    let zero=BigInt(0);
    let big3=BigInt(3);
    
    while(n%i===zero){
        factor=i;
        n/=i;
    }
    
    i=big3;
    const sqrtN=BigInt( Math.floor(Math.sqrt(Number(n))) );
    while(i<=sqrtN&&n>1n){
        while(n%i===zero){
            factor=i;
            n/=i;
        }
        i+=2n;
    }
    
    if(n>1n){
        factor=n;
    }
    return String(factor);
}

//casos de prueba

console.log(largestPrimeFactor(10)); // 5
console.log(largestPrimeFactor(13195)); // 29
console.log(largestPrimeFactor(600851475143)); // 6857