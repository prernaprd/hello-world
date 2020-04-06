'use strict'
const array = [2,5,6,1,3,4];

/**
 * Calculate middle element without using length of array
 * @param {Number} i - index
 * @returns {Number}
 */
function findMiddleElement(i) {
    if(array[i] !== undefined) {
        return getMiddleElement(i+1);
    }
    else {
        return array[Math.floor(i/2)];
    }
}

console.log(findMiddleElement(0));