var fibonacci = function(n) {
    var oneBehind = 1;
    var twoBehind = 0;
    var result = 0;
    if(n === 1) {
        return n;
    }
    else {
        for (var i = 0; i <= n-1; i++) {
            result = oneBehind + twoBehind;
            twoBehind = oneBehind;
            oneBehind = result;
        }
        return result;
    }
};

console.log(fibonacci(6));

var recurssiveFibo = function(n) {
    if(n === 1 || n === 0) {
        return n;
    }
    else {
        return recurssiveFibo(n-1) + recurssiveFibo(n-2);
    }
};

console.log(recurssiveFibo(2));

