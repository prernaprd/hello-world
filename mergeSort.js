var sort = function(array) {
    var n = array.length;
    if(n > 1) {
        var mid = Math.floor(n/2);
        var leftArray = array.slice(0, mid);
        var rightArray = array.slice(mid, n);
        sort(leftArray);
        sort(rightArray);
        merge(array, leftArray, rightArray);
    }
};

var merge = function(array, leftArray, rightArray) {
    var n1 = leftArray.length;
    var n2 = rightArray.length;
    var i = 0; j = 0; k = 0;
    while(i < n1 && j < n2) {
        if(leftArray[i] < rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        }
        else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while(i < n1) {
        array[k] = leftArray[i];
        i++;
        k++;
    }

    while(j < n2) {
        array[k] = rightArray[j];
        j++;
        k++;
    }
    
};

var array = [75, 36, -98, 1, 0 , 2, 2, 34];
sort(array);
console.log(array);