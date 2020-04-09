'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the commonChild function below.
function commonChild(s1, s2) {
    return lcs(s1.split(''), s2.split(''), s1.length, s2.length)

}

function lcs(x, y , m , n) {
    let memo = Array(n+1).fill(0);
    for(let i = 1; i <= m; i++) {
        let prev = 0;
        for(let j = 1; j <=n; j++) {
            let temp = memo[j];
            if(x[i-1] === y[j-1]) {
                memo[j] = prev + 1;
            }
            else {
                memo[j] = Math.max(memo[j], memo[j-1]);
            }
            prev = temp
        }
    }
    return memo[n];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = commonChild(s1, s2);

    ws.write(result + "\n");

    ws.end();
}
