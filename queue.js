'use strict'

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }

    isPeek() {
        if(this.head != null) {
            return this.head.data;
        }
        else {
            return null;
        }
    }

    enqueue(data) {
        let node = new Node(data, null);
        if(this.head != null && this.tail != null) {
            this.tail.next = node;
        }
        else {
            this.head = node;
        }
        this.tail = node;
        return this;

    }

    dequeue() {
        if(this.head != null) {
            let deletedNode = this.head;
            this.head = this.head.next;
            return deletedNode;
        }
        else {
            return null;
        }
    }

    toString() {
        if(this.head != null) {
            let valuesList = [];
            let currentNode = this.head;
            while(currentNode) {
                valuesList.push(currentNode.data);
                currentNode = currentNode.next;
            }
            console.log(valuesList.join(','));
        }
        else {
            console.log('Empty Queue');
        }
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(-98);
queue.enqueue(8);
queue.toString();
queue.enqueue(6);
queue.toString();
queue.dequeue();
queue.toString();
console.log(queue.isPeek());
queue.dequeue();
console.log(queue.isEmpty());
queue.dequeue();
queue.toString();