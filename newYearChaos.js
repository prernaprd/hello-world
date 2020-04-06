
function minimumBribes(q) {
    let minBribe = 0;
    let midOfThree = Number.MAX_VALUE;
    let minOfThree = Number.MAX_VALUE;
    let maxOfThree = Number.MAX_VALUE;

    for(let index = q.length-1 ; index >= 0; --index) {
        if(q[index] - index > 3) {
            console.log('Too chaotic');
            return;
        }
        else {
            if(q[index] > maxOfThree) {
                console.log('Too chaotic');
                return;
            }
            else if(q[index] > midOfThree) {
                minBribe = minBribe + 2;
            }
            else if(q[index] > minOfThree){
                minBribe = minBribe + 1;
            }

            if(q[index] < minOfThree) {
                maxOfThree = midOfThree;
                midOfThree = minOfThree;
                minOfThree = q[index];
            }
            else if(q[index] < midOfThree){
                maxOfThree = midOfThree;
                midOfThree = q[index];
            }
            else if(q[index] < maxOfThree){
                maxOfThree = q[index];
            }
            
        }
    }
    console.log(minBribe);
}

minimumBribes([1,2,5,3,7,8,6,4]);