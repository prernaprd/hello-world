'use strict'
const matrixDiagonal = array => {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i][i]);
    }
}

let array = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[1,2,3,4]];
matrixDiagonal(array);