

const getSumMultiples = (num) => {
    const multiples = [];
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
        multiples.push(i);
        sum += i;
        }
    }
    return sum;
    };

    //casos de prueba

    //console.log(getSumMultiples(10)); // [3, 5, 6, 9]


//ahora crearemos una funcion mejorada que funcione para cuando "num" es un numero muy grande
//con el objetivo de optimizar el tiempo de ejecucion


const getSumMultiplesBig = (num) => {
    //const sum = 0;
    const num3 = Math.floor((num - 1) / 3);
    const num5 = Math.floor((num - 1) / 5);
    const num15 = Math.floor((num - 1) / 15);
    const sum3 = 3 * num3 * (num3 + 1) / 2;
    const sum5 = 5 * num5 * (num5 + 1) / 2;
    const sum15 = 15 * num15 * (num15 + 1) / 2;
    const sum= BigInt(sum3 + sum5 - sum15);
    return String(sum);
}

//casos de prueba

console.log(getSumMultiplesBig(8000000000000000000000000)); // [3, 5, 6, 9]


/**
 * 
 * const sumMult=(limite,divisor)=>{
        //const n=Math.floor((limite-1)/divisor);
        //return divisor*n*(n+1)/2;
        let nums=limite/BigInt(divisor)
        let tempSum= nums*(nums+1n)/2n;
        return BigInt(divisor)*tempSum
    }
    
    cases.forEach((caso)=>{
        let limite=BigInt(caso);
        
        
        const sum3= sumMult(limite-1n,3);
        const sum5= sumMult(limite-1n,5);
        const sum15= sumMult(limite-1n,15);
        const sumTotal=BigInt((sum3 + sum5) - sum15);
        
        console.log(String(sumTotal))
    })
}
 * 
 */