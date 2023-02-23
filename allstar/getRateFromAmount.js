
function getRateFromAmount(amount) {
const rates = {"2500": -1, "5000": -2, "7500": -2.75, "10000": -3.5}
    amount = amount.replace(/\D/gi, '')
    const rate = +amount;
    return rate <= 1000 ? 0 : rate >= 25000 ? -5.75 : rates[amount]
}

console.log(getRateFromAmount('$7,500'))
console.log(getRateFromAmount('$30,000'))
console.log(getRateFromAmount('$1,000'))
