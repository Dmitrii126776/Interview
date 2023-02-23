function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

console.log(isPrime(11))

function primes(num, arr = []) {
    for (let i = 0; i <= num; i++) {
        if (isPrime(i))
            arr.push(i);
    }
    return arr;
}

console.log(primes(20)) // [2, 3, 5, 7, 11, 13, 17, 19]
