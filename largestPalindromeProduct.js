const largestPalindromeProduct = (n) => {
    let max = 0;
    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            const product = i * j;
            if (product < n && isPalindrome(product) && product > max) {
                max = product;
            }
        }
    }
    return max;
}

const isPalindrome = (num) => {
    const str = String(num);
    return str === str.split('').reverse().join('');
}

//casos de prueba

//console.log(largestPalindromeProduct(101110)); // 101101


const largestPalindromeProduct2 = (n) => {
    let max = 0n;
    const bigN = BigInt(n);

    for (let i = 999n; i >= 100n; i--) {
        // Optimización: si el producto de i y el mayor j ya es menor que max, no es necesario continuar
        for (let j = i; j >= 100n; j--) { // Recorremos desde j = i para evitar productos repetidos
            const product = i * j;

            // Si el producto es menor que el palíndromo más grande encontrado, romper el bucle
            if (product < max) break;

            // Verificar si el producto es un palíndromo y menor que n
            if (product < bigN && isPalindrome(product)) {
                max = product;
            }
        }
    }
    return String(max);
}

const isPalindrome2 = (num) => {
    const str = num.toString();
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
