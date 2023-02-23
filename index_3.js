// Max sum between two negatives
// function maxSumBetweenTwoNegatives(arr) {
//     let index = arr.findIndex(el => el < 0)
//     arr = arr.slice(index + 1)
//     if (!arr.length) return -1;
//     let array = [];
//     while (arr.length) {
//         let sum = 0;
//         let i = 0;
//         while (arr[i] > 0) {
//             sum += arr[i];
//             i++
//         }
//         array.push(sum);
//         //let index = arr.findIndex(el => el < 0)
//         arr = arr.slice(index + 1)
//     }
//     return Math.max(...array);
// }
//
// console.log(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -7]))
// console.log(maxSumBetweenTwoNegatives([5, -1, -2]))
// console.log(maxSumBetweenTwoNegatives([1]))
// console.log(maxSumBetweenTwoNegatives([[  4, 0, 0, 2 ]]))

function maxSumBetweenTwoNegatives(arr) {
    if (!arr.length) return 0;
    if (arr.every(el => el > 0)) return -1;
    let index = arr.findIndex(el => el < 0)
    arr = arr.slice(index + 1).reverse()
    if (!arr.length) return -1;
    if (arr.every(el => el <= 0)) return 0;
    let lastIndex = arr.findIndex(el => el < 0)
    if(lastIndex === -1) return -1;
    let array = arr.slice(lastIndex + 1).reverse();
    if (!array.length) return -1;
    let max = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            sum += array[i];
        } else {
            sum = 0;
        }
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}

console.log(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -2])) // 8
console.log(maxSumBetweenTwoNegatives([5, -1, -2])) // 0
console.log(maxSumBetweenTwoNegatives([1, -2])) // -1
console.log(maxSumBetweenTwoNegatives( [])) // -1
console.log(maxSumBetweenTwoNegatives([ -7, -9, 0, -1, 5 ])) // 0
//console.log([5, -1, -2].some(el => el < 0))