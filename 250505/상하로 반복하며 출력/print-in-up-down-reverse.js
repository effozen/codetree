const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let result = [];
    for (let j = 0; j < n; j++) {
        result.push(j % 2 === 0 ? i : n - i + 1);
    }
    console.log(result.join(''));
}
