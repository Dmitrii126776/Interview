function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]))

function f(arr, array = []) {
    for (let i = 0; i < arr.length; i++) {
        array.unshift(arr[i]);
    }
    return array;
}

console.log(f([1, 2, 3, 4, 5, 6]))
