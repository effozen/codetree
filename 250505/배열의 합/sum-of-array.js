const fs = require('fs');
const rows = fs.readFileSync(0).toString().trim().split('\n');

rows.forEach(row => console.log(row.trim().split(' ').reduce((acc, cur) => {
    return acc + Number(cur);
}, 0)));