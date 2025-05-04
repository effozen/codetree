const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split('\n').map(val => val.split(' ').map(Number));

let result = 0;

for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {
        result += arr[i][j];
    }
}

console.log(result);