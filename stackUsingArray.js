'use strict'
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

    toString() {
        if(this.items.length > 0) {
            console.log(this.items.join(','));
        }
        else {
            console.log('Empty stack');
        }
        
    }
};

const stack = new Stack();
stack.push(4);
stack.push(3);
stack.push(8);
stack.pop();
console.log(stack.peek());
stack.toString();
console.log(stack.isEmpty());
stack.pop();
stack.pop();
stack.toString();
stack.pop();
console.log(stack.isEmpty());

