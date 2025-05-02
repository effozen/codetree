const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split('\n');

const [row, col] = inputs.shift().split(' ').map(Number);

const arr1 = inputs.slice(0, row).map(row => row.split(' ').map(Number));
const arr2 = inputs.slice(row, row * 2).map(row => row.split(' ').map(Number));

// console.log(arr1);
// console.log(arr2);

const result = arr1.reduce((acc, rowArr, rowIndex) => {
    return [...acc, rowArr.map((colVal, colIndex) => {
        if (colVal === arr2[rowIndex][colIndex]) return 0;
        return 1;
    })];
}, []);

result.forEach(row => {
    console.log(...row);
});