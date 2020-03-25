'use strict'
function rotateMatrix(matrix, n) {
   
    for(var layer =0; layer < n/2; layer++) {
        let first = layer;
        let last = n-layer-1;
        for(let i= first; i < last; i++) {
            let offset = i- first;

            //save top
            let top = matrix[first][i];

            //left-> top
            matrix[first][i] = matrix[last-offset][first];

            //bottom->left
            matrix[last-offset][first] = matrix[last][last-offset];

            //right->bottom
            matrix[last][last-offset] = matrix[i][last];

            //top->right
            matrix[i][last] = top;
        }
    }

    return matrix;
}

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(matrix);
console.log(rotateMatrix(matrix, 4));
 matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);
console.log(rotateMatrix(matrix, 3));