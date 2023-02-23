// MaxElement function
function maxElement(arr, i = 0, max = -Infinity) {
    if (!arr[i]) return max;
    if (arr[i] > max) max = arr[i];
    return maxElement(arr, i + 1, max)
}

console.log(maxElement([11, 72, 55, 33, 6, 7])) // Number.MIN_SAFE_INTEGER

// Factorial function
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5))

// Fibonacci function
function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
// return n > 2 ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
}

console.log(fibonacci(10))

// Range function
function range(min, step, max) {
    if (arguments.length === 1) return range(1, 1, min)
    if (arguments.length === 2) return range(min, 1, step)
    const result = []
    for (let i = min; i <= max; i += step) {
        result.push(i)
    }
    return result
}

console.log(range(5)) // [ 1, 2, 3, 4, 5 ]
console.log(range(3, 7)) // [ 3, 4, 5, 6, 7 ]
console.log(range(2, 3, 15)) // [ 2, 5, 8, 11, 14 ]
