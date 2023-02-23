function reverse(s, arr = []) {
    let str = s.split(' ');
    for (let i = 0; i < str.length; i++) {
        for (let j = str[i].length - 1; j >= 0; j--) {
            arr.push(str[i][j]);
        }
        if (i !== str.length - 1) {
            arr.push(' ')
        }
    }
    return arr.join('');
}

console.log(reverse('Test Hello one two')) // 'tseT olleH eno owt'