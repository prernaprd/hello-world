'use strict'
//Decode a string to find the count of each character’s appearance in the string.  
const countCharatcers = text => {
    text = text.replace(/[^a-zA-Z]/g, '').replace(' ', '');
    let charArray = text.split('');

    let countMap = {};
    let count = 1;
    for(let c of charArray) {
        if(!countMap[c]) {
            countMap[c] = count;
        }
        else {
            countMap[c] = countMap[c] + count;
        }
    }
    return countMap;
}

console.log(countCharatcers('jjbb%b JK89'));