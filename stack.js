'use strict'

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.top === null;
    }

    peek() {
        if(this.top != null) {
            return this.top.data;
        }
        else {
            return null;
        }
    }

    push(data) {
        if(this.top != null) {
            let node = new Node(data, this.top);
            this.top = node;
        }
        else {
            let node = new Node(data, null);
            this.top = node;
        }
        return this;
    }

    pop() {
        if(this.top != null) {
            let deletedNode = this.top;
            this.top = this.top.next;
            return deletedNode;
        }
        else {
            return null;
        }
    }

    toString() {
        if(this.top != null) {
            let valuesList = [];
            let currentNode = this.top;
            while(currentNode) {
                valuesList.push(currentNode.data);
                currentNode = currentNode.next;
            }
            console.log(valuesList.join(','));
        }
        else {
            console.log('Empty stack');
        }
    }
}

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
