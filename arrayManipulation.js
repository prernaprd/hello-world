//Time complexity = O(nm)
function arrayManipulation(n, queries) {

    let array = Array(n).fill(0);
    let max = 0;

    queries.forEach(([start, end, value]) => {
        for(let j = start-1; j < end; j++) {
            array[j] = array[j] + value;
            max = array[j] > max ? array[j] : max;
        }
    });

    return max;

}

//Time complexity(n+m)
function arrayManipulation1(n, queries) {
    const arr = new Array(n).fill(0);
    let result = 0;

    queries.forEach(([a, b, k]) => {
        arr[a - 1] += k;
        if (b < arr.length) {
            arr[b] -= k;
        }
    });
    
    arr.reduce((a, b) => {
        const acc = a + b;
        result = Math.max(result, acc);
        return acc;
    }, 0);
    return result;
}

let queries = [[1,2,100], [2,5,100], [3,4,100]];
console.log(arrayManipulation(5, queries));
console.log(arrayManipulation1(5, queries));