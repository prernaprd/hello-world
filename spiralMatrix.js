'use strict'
function spiralMatrix(array) {
    if(array.length === 0) return 0;

    let outputArray = [];
    let rowBegin = 0;
    let rowEnd = array.length-1;
    let colBegin = 0;
    let colEnd = array[0].length-1;

    while(rowBegin <=rowEnd && colBegin <= colEnd) {

        for(let i = colBegin; i <= colEnd; i++) {
            outputArray.push(array[rowBegin][i]);
        }

        rowBegin++;

        for(let i = rowBegin; i <= rowEnd; i++) {
            outputArray.push(array[i][colEnd]);
        }

        colEnd--;

        if(rowBegin <= rowEnd) {
            for(let i= colEnd; i >= colBegin; i--) {
                outputArray.push(array[rowEnd][i]);
            }
        }

        rowEnd--;

        if(colBegin < colEnd) {
            for(let i = rowEnd; i>= rowBegin; i--) {
                outputArray.push(array[i][colBegin]);
            }
        }

        colBegin++;

    }

    return outputArray;

}

let inputArray = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]
console.log(inputArray);
console.log(spiralMatrix(inputArray));