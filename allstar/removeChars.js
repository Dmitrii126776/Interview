function remove(str) {
    // return str.substring(3);
    return str.slice(3).slice(0, -4)
}

console.log(remove('<p>Test Cypress #234</p>'))
