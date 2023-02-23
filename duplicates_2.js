function twoMax(arr) {
    //return arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el)); // [5, 19, 5, 2, 19, 2, 19] only duplicates
    //return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)); // [ 8, 12 ] only unique
    //return [...new Set(arr)]; [ 5, 8, 19, 12, 2 ] new set
    return arr.filter((el, i) => i === arr.indexOf(el)); // [ 5, 8, 19, 12, 2 ] new set
    // return arr.filter((el, i) => i === arr.indexOf(el) && i !== arr.lastIndexOf(el)); // [ 5, 19, 2 ] duplicates one time
}

console.log(twoMax([5, 8, 19, 12, 5, 2, 19, 2, 19])) // [ 5, 8, 19, 12, 2 ]
