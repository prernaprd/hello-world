

var factorial = function(n) {

    if(n === 0) {
        return 1;
    }
    else  {
        return n * factorial(n-1);
    }
    
    
}

var factorialUsingMemo = function(n, memo) {
    memo = memo || {};
    if(memo[n]) {
        return memo[n];
    }
    if(n === 0) {
        return 1;
    }
    else  {
        memo[n] = n * factorial(n-1, memo);
        return memo[n];
    }
    
    
}

console.log(factorial(5));
console.log(factorialUsingMemo(5));