const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

function GCD(n, m) {
    while(m !== 0) {
        const temp = m;
        m = n % m;
        n = temp;
    }
    return n;
}

const gcd = GCD(n, m);
const a = n / gcd;
const b = m / gcd;

console.log(gcd * a * b);