const twoSum = (nums, target) => {
    const sumCache = {}
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i]
        // Calculate the diff
        const diff = target - value
        // If the diff already exists, return the corresponding index directly
        if (typeof sumCache[diff] !== 'undefined') {
            return [sumCache[diff], i]
        } else {
            // otherwise save the value and index
            sumCache[value] = i
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum([3, 2, 4], 6)) // [1, 2]
// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return false;
// }
