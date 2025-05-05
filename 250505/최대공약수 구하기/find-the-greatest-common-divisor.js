const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

function GCD(n, m) {
    while(m !== 0) {
        const temp = m;
        m = n % m;
        n = temp;
    }
    return n;
}

console.log(GCD(n, m));