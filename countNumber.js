function countEven(n) {
    return (n.toString().match(/[02468]/g) || []).length;
}

console.log(countEven(1234567890))