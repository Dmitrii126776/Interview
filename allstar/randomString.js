const generateRandomString = function(length=6){
    return Math.random().toString(20).substr(2, length)
}
console.log(generateRandomString())
console.log(generateRandomString(10))
console.log(generateRandomString(15))
