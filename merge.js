

"use strict";
class MergeSort {
    sort(inputArray) {
        const arrayLength = inputArray.length;
        if (arrayLength > 1) {
            const middle = Math.floor(arrayLength / 2);
            const leftHalf = inputArray.slice(0, middle);
            const rightHalf = inputArray.slice(middle, arrayLength);
            this.sort(leftHalf);
            this.sort(rightHalf);
            this.merge(inputArray, leftHalf, rightHalf);
        }
    }

    merge(inputArray, leftHalf, rightHalf) {
        const n1 = leftHalf.length;
        const n2 = rightHalf.length;
        let i = 0, j = 0, k = 0;
        while (i < n1 && j < n2) {
            if (leftHalf[i] < rightHalf[j]) {
                inputArray[k] = leftHalf[i];
                i++;
            } else {
                inputArray[k] = rightHalf[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            inputArray[k] = leftHalf[i];
            i++;
            k++;
        }
        while (j < n2) {
            inputArray[k] = rightHalf[j];
            j++;
            k++;
        }
    }
}

const inputArray = [6, 5, 3, 2, 2, 15];
const mergeSort = new MergeSort();
mergeSort.sort(inputArray);
console.log(inputArray);
