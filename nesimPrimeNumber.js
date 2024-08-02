const isPrime = (num) => {
    if (num < 2n) return false;
    if (num === 2n || num ===3n) return true;
    if (num % 2n === 0n || num%3n===0n) return false;
    const raiz = Math.sqrt(Number(num));
    if(Number.isInteger(raiz)) return false;
    const sqrtNum = Math.floor(raiz);
    for (let i=5n; i<=sqrtNum; i=getNextI(i)){
      if(num%i===0n) return false;
    }
    return true
  }
  
  const getNextI=(valI)=>{
    if(valI===2n) return 3n;
    if(valI===3n) return 5n;
    if(valI===5n) return 7n;
    let tempNext= valI+2n;
    if(tempNext%3n!==0&&tempNext%2n!==0) return tempNext;
    return tempNext+=2n;
  }
  
  const nesimPrimeNumber = (num,initI,initCount) => {
    let n = BigInt(num);
    let i = BigInt(initI);
    let count = BigInt(initCount);
    let prime = BigInt(2);
    while (count < n) {
        if (isPrime(i)) {
            prime = i;
            //console.log(prime);
            count++;
        }
        i= getNextI(i);
    }
    return { prime, count, num }
  }
  
  function main() {
      var t = parseInt(readLine());
      let cases=[];
      for(var a0 = 0; a0 < t; a0++){
          var n = parseInt(readLine());
          cases.push(n)
      }
      let lastPrime = BigInt(2);
      let lastCount = BigInt(0);
      const tempCases=[...cases];
      tempCases.sort((a,b)=>a-b);
      
      let listResults=[];
      for(let i=0;i<tempCases.length;i++){
          const tempRes=nesimPrimeNumber(tempCases[i],lastPrime,lastCount)
          //console.log(tempRes.prime.toString());
          listResults.push(tempRes)
          lastPrime=tempRes.prime;
          lastCount=tempRes.count-1n;
      }
      cases.forEach(caso=>{
          console.log(listResults.find(res=>Number(res.num)===caso).prime.toString())
      })
  }