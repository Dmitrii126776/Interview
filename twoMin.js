function twoSmallestNumbers(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;
    // arr = [...new Set(arr)];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min2 = min;
            min = arr[i];
        } else {
            if (arr[i] < min2 && arr[i] !== min) {
                min2 = arr[i];
            }
        }
    }
    return [min, min2];
}

console.log(twoSmallestNumbers([5, 8, 12, 5, 2, 19, 2])) // [2, 5]