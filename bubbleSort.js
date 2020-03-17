'use strict'
class BubbleSort {
    sort(array) {
        let i, j, stop;

        for(i=0; i < array.length; i++) {
            for(j=0, stop = array.length - i; j < stop; j++) {
                if(array[j] > array[j+1]) {
                    this.swap(array, j, j+1);
                }
            }
        }

        return array;
    }

    swap(array, firstIndex, secondIndex) {
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex]
        array[secondIndex] = temp;
    }
}

let array = [3,4,6,1,2];
const bubbleSort = new BubbleSort();
console.log(bubbleSort.sort(array));