'use strict'

/* A Stack object for queue-like functionality over JavaScript arrays. */
class Stack {
    constructor(){
        this.items = [];
    }

    push(obj) {
        this.items.unshift(obj);
    }
    pop() {
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    peek(){
        return this.items[0];
    }
};



function isBalanced(s) {
    let stack = new Stack();
    let bracketsList = s.split('');
    
    for(let i=0; i < bracketsList.length; i++) {
        switch (bracketsList[i]) {
            case '{':
            case '(':
            case '[':
                stack.push(bracketsList[i]);
                break;
            case '}':
                if (stack.isEmpty() || (stack.peek() != '{')) {
                    return "NO";
                }
                stack.pop();
                break;
            case ')':
                if (stack.isEmpty() || (stack.peek() != '(')) {
                    return "NO";
                }
                stack.pop();
                break;
            case ']':
                if (stack.isEmpty() || (stack.peek() != '[')) {
                    return "NO";
                }
                stack.pop();
                break;
        }
    }
    
    return stack.isEmpty() ? "YES" : "NO";
}

console.log(isBalanced('[{({})}]'));