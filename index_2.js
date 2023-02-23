function f(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1);
    //return str.slice(1)
}

console.log(f('qwerty'))
// Basic Math (Add or Subtract)
// function calculate(str) {
//     return eval(
//         str.replace(/plus/g, '+').replace(/minus/g, '-')
//     ).toString();
// }
// console.log(calculate('764minus107plus762')) // '1419'

// const Food = {
//     cuisine: 'abc'
// };
// const food1 = Object.create(Food);
// delete food1.cuisine;
// console.log(delete food1.cuisine);
// console.log(food1.cuisine);

// Anything to integer 6 KYU
// https://www.codewars.com/kata/52ac7cad98d1981a840004fc/solutions/javascript
function toInteger(n) {
    // if (isNaN(n)) return 0;
    // n = Math.trunc(n);
    // if (!Number.isFinite(n)) return 0;
    // return n;
    return n | 0;
}

console.log(toInteger('4.55')) // 4