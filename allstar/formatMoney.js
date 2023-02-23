const formatToCurrency = amount => {
    //return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    let money = "$" + amount.toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    return money.slice(0, money.length - 3)
};
console.log(formatToCurrency(12.34546)); //"$12.35"
//console.log(formatToCurrency(42345255.356)); //"$42,345,255.36
//console.log(formatToCurrency(+'1000000')); //"$42,345,255.36

console.log((10000).toLocaleString('en-US'))
