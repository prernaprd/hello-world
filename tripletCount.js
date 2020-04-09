'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    let rightMap = {};
    let leftMap = {};
    arr.forEach(a => {
        rightMap[a] = (rightMap[a] || 0) + 1;
    });

    let count = 0;
    arr.forEach(a => {
        let midTerm = a;
        let c1 = 0, c3 = 0;

        rightMap[a] = rightMap[a] - 1;
        if(leftMap[midTerm/r] && (midTerm % r === 0)) {
            c1 = leftMap[midTerm/r];
        }

        if(rightMap[midTerm*r]) {
            c3 = rightMap[midTerm*r];
        }

        count = count + (c1*c3);
        leftMap[midTerm] = (leftMap[midTerm] || 0) + 1;
    });
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + '\n');

    ws.end();
}
