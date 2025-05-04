const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let result = [];
    if (i % 2 === 0) {
        for (let j = 1; j <= n; j++) {
            result.push(j);
        }
    } else {
        for (let j = n; j > 0; j--) {
            result.push(j);
        }
    }
    console.log(result.join(''));
}