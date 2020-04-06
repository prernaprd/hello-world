//Find all pairs in an array of numbers that add up to a specific result.  
'use strict'
const findPairs = array => {
    let pairsList = [];
    console.log(array);
    let filteredArray = array.filter((value, index) => array.indexOf(value) === index);
    filteredArray = array.slice();
    console.log(filteredArray);
    for(let i = 0; i < filteredArray.length; i++) {
        for(let j = i+1; j < filteredArray.length; j++) {
            let sum = filteredArray[i] + filteredArray[j];
            if(array.indexOf(sum) !== -1) {
                pairsList.push([filteredArray[i], filteredArray[j]]);
            }
        }
    }
    return pairsList;
}

let array = [2,4,6,2,1,3]
console.log(findPairs(array));