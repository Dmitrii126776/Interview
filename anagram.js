// function anagram(str, str2) {
//     str = str.toLowerCase().replace(/[^a-z\d]+/g, '').split('').sort().join('');
//     str2 = str2.toLowerCase().replace(/[^\w\d]+/g, '').split('').sort().join('');
//     return str === str2;
//    // return [...str.toLowerCase()].sort().toString()
// }
const anagram = (str, str2) => {
    str = [...str.toLowerCase().replace(/\W/gi, '')].sort().toString()
    str2 = [...str2.toLowerCase().replace(/\W/gi, '')].sort().toString()
    return str === str2;
}
console.log(anagram('ab c', 'c b a'))
console.log(anagram('Qw er ty', 'yT rewq'))
console.log(anagram('avyRRe os jra', 'yt rewssq'))
// console.log('   w  er Tr  t'.replace(/\W/g, ''))


