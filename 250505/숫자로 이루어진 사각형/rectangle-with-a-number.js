const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

function printNumbers(n) {
    let cnt = 1;
    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = 0; j < n; j++) {
            arr.push(cnt);
            cnt = (cnt + 1) % 10 === 0 ? 1 : cnt + 1;
        }
        console.log(...arr);
    }
}

printNumbers(N);