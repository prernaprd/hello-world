"use strict"
class QuickSort {
    sort(array, l, h) {
        if(l < h) {
            let partitionIndex = this.partitionFirstElementAsPivot(array, l, h);
            this.sort(array, l, partitionIndex-1);
            this.sort(array, partitionIndex+1, h);
        }
    }

    swap(array, firstIndex, secondIndex) {
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }

    partition(array, l, h) {
        let pivot = array[h];
        let i = l -1;
        let j = l;
        while(j < h) {
            if(array[j] < pivot) {
                i++;
                this.swap(array, i, j);
            }
            j++;
        }
        this.swap(array, i+1, h);
        return i+1;
    }

    partitionFirstElementAsPivot(array, l, h) {
        let pivot = array[l];
        let i = l+1;
        let j = l+1;
        while(j <= h) {
            if(array[j] < pivot) {
                this.swap(array, i, j);
                i++;
            }
            j++;
        }
        this.swap(array, i-1, l);
        return i-1;
    }
}

const quickSort = new QuickSort();
let array = [2, 34, 2, 1, 5, 11, 6];
quickSort.sort(array, 0, array.length-1);
console.log(array);