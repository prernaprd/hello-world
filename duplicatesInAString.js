'use strict'
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.unshift(item);
    }

    pop() {
        return this.items.shift();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek() {
        return this.items[0];
    }
}

function superReducedString(s) {
    let stack = new Stack();
    for(let char of s) {
        let top = stack.isEmpty() ? '' : stack.peek();
        if(top === char) 
            stack.pop(); 
        else 
            stack.push(char); 
    }

    let resultArray = stack.items.reverse();
    if(resultArray.length === 0) 
        return 'Empty String'; 
    else 
        return resultArray.join('');
}

let a = 'aabbcde';
console.log(superReducedString(a));