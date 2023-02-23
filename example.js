function solve(str) {
    let arr = [];
    str = str.split(' ')
    for (let i = 0; i < str.length; i++) {
        for (let j = str[i].length - 1; j >= 0; j--) {
            arr.push(str[i][j])
        }
        if (i !== str.length - 1) {
            arr.push(' ')
        }
    }
    return arr.join('');
}

//console.log(solve([3, -1, 4, -1, 3, 4]))
console.log(solve('One Hello Two')) // 'enO olleH owT'
//console.log(solve('qwerty', 'ytre w q'))
//console.log(fibonacci(10))
