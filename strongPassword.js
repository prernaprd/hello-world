'use strict'
function checkPassword(n, password) {
    if(n <= 3) { return 6-n;}

    let count = 0;
    if(password.match(/\d/) === null) { count++;}
    if(password.match(/[A-Z]/) === null) {count++;}
    if(password.match(/[a-z]/) === null) {count++;}
    if(password.match(/\W/) === null) {count++;}

    return (count + n >= 6) ? count : 6-n;

}

let password = '56YHIUIIik';
console.log(checkPassword(10, password));
password = '3T';
console.log(checkPassword(2, password));