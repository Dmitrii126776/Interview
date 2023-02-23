function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray([88, 6, 99, -88, 34, 2, -5, 9, -44, 2,]))

function selectArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[index]) {
                index = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

console.log(selectArray([88, 6, 99, -88, 34, 2, -5, 9, -44, 2,]))
