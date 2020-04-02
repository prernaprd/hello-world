'use strict';

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        let node = new Node(data, null);
        if(this.head != null && this.tail != null) {
            this.tail.next = node;
        }
        else {
            this.head = node;
        }
        this.tail = node;
        this.size++;
        return this;
    }

    prepend(data) {
        
        if(this.head != null) {
            let node = new Node(data, this.head);
            this.head = node;
        }
        else {
            let node = new Node(data, null);
            this.head = node;
            this.tail = node;
        }
        return this;
    }

    deleteAtHead() {
        if(this.head !== null) {
            let deletedNode = this.head;
            this.head = this.head.next;
            return deletedNode; 
        }
        else {
            return null;
        }
    }

    replaceAtIndex(data, position) {
        if(this.head != null) {
            let currentNode = this.head;
            let i = 0;
            while(currentNode) {
                if(i === position) {
                    currentNode.data = data;
                    return this;
                }
                else {
                    currentNode = currentNode.next;
                    i++;
                }
            }
        }
        else {
            return null;
        }
    }

    insertAtIndex(data, position) {
        if(this.head != null) {
            let currentNode = this.head;
            let previousNode = null;
            let i = 0;
            while(currentNode) {
                if(i === position) {
                    let node = new Node(data, previousNode.next);
                    previousNode.next = node;
                    return this;
                }
                else {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                    i++;
                }
            }
        }
        else {
            return null;
        }
    }

    hasCycle() {
        if(this.head === null) {
            return null;
        }
        else {
            let currentNode = this.head;
            let valuesList = [];
            let isCycleDetected = false;
            while(currentNode.next !== null) {
                if(valuesList.length !== 0 && valuesList.indexOf(currentNode.data) !== -1) {
                    isCycleDetected = true;
                    return isCycleDetected;
                }
                else {
                    valuesList.push(currentNode.data);
                    currentNode = currentNode.next;
                }
                
            }
            return isCycleDetected;
        }
        
    }

    reverse() {
        if(this.head != null) {
            let currentNode = this.head;
            let previousNode = null;
            let nextNode = null;
            while(currentNode) {
                nextNode = currentNode.next;
                currentNode.next = previousNode;
    
                previousNode = currentNode;
                currentNode = nextNode;
            }
            this.tail = this.head;
            this.head = previousNode;
            return this;
        }
        else {
            console.log('List is empty');
        }
    }

    toString() {
        if(this.head != null) {
            let currentNode = this.head;
            let outputList = [];
            while(currentNode) {
                outputList.push(currentNode.data);
                currentNode = currentNode.next;
            }
            console.log(outputList.join(','));
        }
        else {
            console.log('Empty list');
        }
    }

    deleteTail() {
        if(this.head != null && this.tail != null) {
            let currentNode = this.head.next;
            let previousNode = this.head;
            while(currentNode) {
                if(currentNode.next === null) {
                    let deletedNode = currentNode;
                    previousNode.next = null;
                    this.tail = previousNode;
                    this.size --;
                    return deletedNode;
                }
                else {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
            }
            return null;

        }
        else {
            this.size = 0;
            this.head = null;
            this.tail = null;
            return this;
        }
    }

    delete(value) {
        if(this.head != null) {
            if(this.head.data === value) {
                return this.deleteAtHead();
            }
            else if(this.tail.data === value) {
                return this.deleteTail();
            }
            else {
                let currentNode = this.head.next;
                let previousNode = this.head;
                while(currentNode) {
                    if(currentNode.data === value) {
                        let deletedNode = currentNode;
                        previousNode.next = currentNode.next;
                        this.size --;
                        return deletedNode;
                    }
                    else {
                        previousNode = currentNode;
                        currentNode = currentNode.next;
                    }
                }
                return null;
            }
            
        }
        else {
            this.size = 0;
            return null;
        }
        
    }
}

const singleLinkedList = new SingleLinkedList();
singleLinkedList.append(4);
singleLinkedList.prepend(3);
singleLinkedList.prepend(1);
singleLinkedList.toString();
singleLinkedList.insertAtIndex(2,1);
singleLinkedList.toString();
singleLinkedList.replaceAtIndex(5,3);
singleLinkedList.toString();
singleLinkedList.prepend(7);
console.log(singleLinkedList.hasCycle());
console.log(singleLinkedList.deleteAtHead());
singleLinkedList.toString();
console.log(singleLinkedList.deleteTail());
singleLinkedList.toString();
console.log(singleLinkedList.delete(2));
singleLinkedList.toString();
singleLinkedList.reverse();
singleLinkedList.toString();