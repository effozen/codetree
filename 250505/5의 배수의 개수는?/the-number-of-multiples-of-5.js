const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split('\n').flatMap(row => row.split(' '));

const result = arr.reduce((acc, cur) => {
    return Number(cur) % 5 === 0 ? acc + 1 : acc;
}, 0);

console.log(result);