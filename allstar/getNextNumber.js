function getNextNumber() {
    if (!getNextNumber.current) {
        getNextNumber.current = 100;
    }
    const nextNumber = getNextNumber.current;
    getNextNumber.current++;
    return nextNumber;
}

console.log(getNextNumber() + 1); // 101


