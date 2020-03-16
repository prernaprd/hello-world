function countingValleys(n =5, s=[DUDU]) {
    let sum = 0;
    let count = 0;
    for(let i=0;i<n;i++){
        if(s[i]=='U'){
        if(++sum==0)
            count++;
        }
        else sum--;
    }
    return count;

}

function plusMinus(arr) {
    let numOfPositive = 0;
    let numOfNegative = 0;
    let numOfZero = 0;
    for(let i=0; i <arr.length; i++) {
        if(arr[i]=== 0) numOfZero++;
        else if (arr[i] > 0) numOfPositive++;
        else numOfNegative ++;
    }
    console.log((numOfPositive/arr.length).toFixed(6));
    console.log((numOfNegative/arr.length).toFixed(6));
    console.log((numOfZero/arr.length).toFixed(6));
}

plusMinus([1,2,-1,0,0]);