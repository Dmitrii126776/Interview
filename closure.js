function urlGenerator(x) {
    return function (y) {
        return `https://www.${y}.${x}`
    }
}

const result = urlGenerator('com');
const result2 = urlGenerator('io')

console.log(result('swimlane'));
console.log(result2('google'));

function sum(x) {
    return function (y) {
        return y + x;
    }
}

const addTen= sum(10);
console.log(addTen(12))

const addTwenty = sum(20);
console.log(addTwenty(12))

function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const counting = counter();
console.log(counting())
console.log(counting())
console.log(counting())