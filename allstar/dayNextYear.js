const today = new Date()
// console.log(
//     (d => new Date(d.getFullYear() + 1, d.getMonth(), d.getDate()))(new Date)
// )

console.log(today.toLocaleString('en-US'))
const dayNextYear = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
// const dayNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
console.log(dayNextYear.toLocaleDateString('en-US'))
// console.log(dayNextMonth.toLocaleString('en-US'))

const date = new Date();
console.log(date); // 👉️ Fri Jan 21 2022

// ✅ Add years to date (Without mutation)
const dateCopy = new Date(date.getTime());

dateCopy.setFullYear(date.getFullYear() + 1);

console.log(dateCopy); // 👉️ Sat Jan 21 2023

console.log(date); // 👉️ Fri Jan 21 2022
