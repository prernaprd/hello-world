'use strict'
function minimumBribes(q) {
    let minBribe = 0;
    let swapMap = {};
    for(let index = 1; index <= q.length; index++) {
        if(index < q[index-1]) {
            let numOfSwap = q[index-1] - index;
            if(numOfSwap > 2) {
                console.log('Too chaotic'); 
                return;
            }
            else {
                minBribe = minBribe + numOfSwap;
            }
        }
    }
    console.log(minBribe);
}

minimumBribes([1,2,5,3,7,8,6,4]);