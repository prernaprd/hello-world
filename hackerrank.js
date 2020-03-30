'use strict'
function reverseArray(a) {
    let outputArray = []
    for(let i = a.length-1 ; i >= 0; i--) {
        outputArray.push(a[i]);
    }
    console.log(outputArray.join(','));
}

reverseArray([1,2,3,4]);
reverseArrayInPlace([1,2,3,4]);
