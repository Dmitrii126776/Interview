const getRandomString = (length ) => {
    // Declare all characters
    //let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //let chars = 'abcdefghijklmnopqrstuvwxyz';
    const chars = '0123456789';
    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return +str;
};

console.log(getRandomString(5)); // JgKGQEUx
// console.log(random(12)); // JgKGQEUx
