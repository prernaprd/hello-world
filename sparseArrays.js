'use strict'

function matchingStrings(strings, queries) {
    let queryCountMap = new Map();
    
    for(let s of strings) {
        if(!queryCountMap.has(s)) {
            queryCountMap.set(s,1);
        }
        else {
            let count = queryCountMap.get(s);
            queryCountMap.set(s, count+1);
        }
    }

    let resultArray = [];
    for(var q of queries) {
        if(queryCountMap.has(q)) {
            resultArray.push(queryCountMap.get(q));
        }
        else {
            resultArray.push(0);
        }
    }

    return resultArray;

}

let strings = ['aba', 'baba', 'aba', 'xtr'];
let queries = ['aba','dfr', 'xtr'];
console.log(matchingStrings(strings,queries));