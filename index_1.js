//[0,1,1,2,3,5,8,13,21]
function fibonacci(n) {
    let arr = [0, 1]
    if (n < 2) return arr;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
        arr.push();
    }
    return arr;
}

console.log(fibonacci(10))

// function revStr(str) {
//     return str.split('').reverse().join('');
// }
// console.log(revStr('Dmitrii'))

function revStr(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(revStr('Dmitrii'))