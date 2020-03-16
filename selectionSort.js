var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
    var minIndex = startIndex;
    var minValue = array[startIndex];
    
    for(var i = minIndex+1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    
    return minIndex;

};

var indexOfMaximum = function(array, startIndex) {
    var maxIndex = startIndex;
    var maxValue = array[startIndex];
    
    for(var i = maxIndex+1; i < array.length; i++) {
        if(array[i] > maxValue) {
            maxIndex = i;
            maxValue = array[i];
        }
    }
    
    return maxIndex;

};

var selectionSort = function(array) {
    var minIndex;
    for(var currentIndex = 0; currentIndex < array.length; currentIndex++) {
        minIndex = indexOfMinimum(array,currentIndex);
        console.log(array);
        swap(array, currentIndex, minIndex);
    }
};

var reverseSelectionSort = function(array) {
    var maxIndex;
    for(var currentIndex = 0; currentIndex < array.length; currentIndex++) {
        maxIndex = indexOfMaximum(array,currentIndex);
        console.log(array);
        swap(array, currentIndex, maxIndex);
    }
};

var array = [2, 1];
selectionSort(array);

var reverseAarray = [4, 1, 5, 19, 11];
reverseSelectionSort(reverseAarray);

var negativeArray = [-4, -1, -5, -19, -11, 0 , 0, 2];
reverseSelectionSort(negativeArray);
