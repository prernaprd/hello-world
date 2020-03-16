
var insertionSort = function(array) {
    for(var i = 1; i < array.length; i++) {
        var key = array[i];
        var j = i - 1;
        while(j >=0 && array[j] > key) {
            array [j+1] = array[j];
            j = j - 1;
        }
        array[j+1] = key;
    }
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];
console.log("Before after inserting 2:  " + array);
insertionSort(array);
console.log("Array after inserting 2:  " + array);
