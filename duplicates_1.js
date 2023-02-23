// only unique
function only_unique(arr) {
    return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))
}

console.log(only_unique([1, 2, 4, 4, 3, 3, 1, 5, 3, 8])) // [ 2, 5, 8 ]

// all duplicates
function all_duplicates(arr) {
    return arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el))
}

console.log(all_duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, 8])) // [1, 4, 4, 3, 3, 1, 3]

// only one duplicates
function only_one_duplicates(arr) {
    return arr.filter((el, i) => arr.indexOf(el) !== arr.lastIndexOf(el) && i === arr.lastIndexOf(el))
}

console.log(only_one_duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, 8])) // [ 4, 1, 3 ]

// all elements without duplicates

function all_elements_once(arr) {
    //return [...new Set(arr)]
    return arr.filter((el, i) => i === arr.indexOf(el))
}

console.log(all_elements_once([1, 2, 4, 4, 3, 3, 1, 5, 3, 8])) // [ 1, 2, 4, 3, 5, 8 ]