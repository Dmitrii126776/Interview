// What doesn't belong to these?
function findTheNotFittingElement(series) {
    // console.log(series)
    // if (series.every(el => typeof el === 'number')){
    //
    // }
     return series.filter(el => series.indexOf(el) === series.lastIndexOf(el));

}

console.log(findTheNotFittingElement(['Z', 'L', 'P', 't', 'G'])) // 't'
console.log(findTheNotFittingElement([-2, -2, -2, -6, 1, -10])) // -2
console.log(findTheNotFittingElement(['1', 2, '4', '6', '8'])) // 2
console.log(findTheNotFittingElement([1, 2, 2, 2, 2])) // 1
