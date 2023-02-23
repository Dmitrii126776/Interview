function getFormattedDate(date) {
    // date = new Date();
    // const dateobj = new Date(date);
    const year = new Date(date).getFullYear();
    const month = (1 + new Date(date).getMonth()).toString().padStart(2, '0');
    const day = new Date(date).getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
}

// console.log(getFormattedDate('2022-08-29T05:00:00'))
// console.log(getFormattedDate('2021-03-16T05:00:00'))
// console.log(getFormattedDate('2021-03-19T05:00:00'))
// console.log(getFormattedDate('2022-08-28T01:59:58.3723433Z'))

const createTodayDate = () => {
    const date = new Date()
    const year = new Date(date).getFullYear();
    const month = (1 + new Date(date).getMonth()).toString().padStart(2, '0');
    const day = new Date(date).getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
}
console.log(createTodayDate())
