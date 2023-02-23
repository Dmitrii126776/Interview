let regexp = /html|php|css|java(script)?/gi;

let str = "First HTML appeared, then CSS, then JavaScript";

console.log(str.match(regexp)); // 'HTML', 'CSS', 'JavaScript'