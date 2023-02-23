// function solve(str, name) {
//     return str.indexOf(name)
// }
//
// console.log(solve('this is home', 'home'))

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

formatter.format(1000) // "$1,000.00"
formatter.format(10) // "$10.00"
console.log(formatter.format(9999))
