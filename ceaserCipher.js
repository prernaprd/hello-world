'use strict'
function caesarCipher(s, k) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let originalLowerAlphabet = alphabets.split('');
    let decryptedLowerAlphabet = originalLowerAlphabet.slice();
    let originalUpperAlphabet = alphabets.toUpperCase().split('');
    let decryptedUpperAlphabet = originalUpperAlphabet.slice();
    for(let i = 0; i < k; i++) {
        let tempLower = decryptedLowerAlphabet.shift();
        decryptedLowerAlphabet.push(tempLower);
        let tempUpper = decryptedUpperAlphabet.shift();
        decryptedUpperAlphabet.push(tempUpper);
    }

    let resultArray = [];
    for(let letter of s) {
        if(letter === '-') {resultArray.push(letter);}
        if(letter === letter.toLowerCase()) {
            let index = originalLowerAlphabet.findIndex(function(element, index, array){ return element === letter});
            resultArray.push(decryptedLowerAlphabet[index]);
        }
        else {
            let index = originalUpperAlphabet.findIndex(function(element, index, array){ return element === letter});
            resultArray.push(decryptedUpperAlphabet[index]);
        }
    }
    return resultArray.join('');
}

console.log(caesarCipher('middle-Outz', 2));
console.log(caesarCipher('middle-Outz', 4));