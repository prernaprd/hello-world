'use strict'
function hourGlassSum(matrix) {

    let maxsum = -1000,jj = 0;
    for(let i = 0;i < 4;i++) {
        let sum = 0;
        for(let j = jj;j < jj+3;j++) {
            sum += matrix[i][j];
            if(j==jj) sum += matrix[i+1][jj+1];
            sum += matrix[i+2][j];
        }
        jj = (jj < 3) ? jj+1 : 0;
        if(sum > maxsum) maxsum = sum;
        if(jj != 0) i--;
    }
    return maxsum;
}

let matrix = [[-9,-9,-9,1,1,1],[0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0]];
console.log(hourGlassSum(matrix));