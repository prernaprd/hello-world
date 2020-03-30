'use strict'
function camelcase(s) {
    let count = 1;
    for(let letter of s) {
        if(letter === letter.toUpperCase()) {
            count++;
        }
    }
    return count;

}

let s = 'iAmInvolved';
console.log(camelcase(s));