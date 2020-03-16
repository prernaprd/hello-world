'use strict'

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        let node = new Node(value, null);
        if(this.head != null) {
            this.tail.next = node;
            this.tail = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
        this.size ++;
        return this;
    }

    deleteHead() {
        if(this.head != null) {
            let deletedNode = this.head;
            this.head = this.head.next;
            this.size --;
            return deletedNode;
        }
        else {
            this.size = 0;
            this.head = null;
            this.tail = null;
            return this;
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
            if(this.head.value === value) {
                return this.deleteHead();
            }
            else if(this.tail.value === value) {
                return this.deleteTail();
            }
            else {
                let currentNode = this.head.next;
                let previousNode = this.head;
                while(currentNode) {
                    if(currentNode.value === value) {
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

class HashTable {
    constructor(hashTableSize) {
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
        this.keys = {};
    }

    hash(value) {
        return value.length % this.buckets.length;
    }

    getKeys() {
        return Object.keys(this.keys);
    }

    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const inputLinkedList = this.buckets[keyHash];
        if(inputLinkedList.size > 0) {
            let currentNode = inputLinkedList.head;
            while(currentNode) {
                if(currentNode.value.key === key) {
                    currentNode.value.value = value;
                }
                currentNode = currentNode.next;
            }
            inputLinkedList.append({key: key, value: value});
        }
        else {
            inputLinkedList.append({key : key, value: value});
        }
    }

    has(key) {
        return Object.prototype.hasOwnProperty.call(this.keys, key);
    }

    get(key) {
        const hashKey = this.hash(key);
        const inputLinkedList = this.buckets[hashKey];
        if(inputLinkedList.size > 0) {
            let currentNode = inputLinkedList.head;
            while(currentNode) {
                if(currentNode.value.key === key) {
                    return currentNode.value.value;
                }
                currentNode = currentNode.next;
            }
            return 'Not found';
        }
        else {
            return 'Not found';
        }
    }

    delete(key) {
        const hashKey = this.hash(key);
        const inputLinkedList = this.buckets[hashKey];
        if(inputLinkedList.size > 0) {
            let currentNode = inputLinkedList.head;
            while(currentNode) {
                if(currentNode.value.key === key) {
                    return inputLinkedList.delete(currentNode.value);
                }
                else {
                    currentNode = currentNode.next;
                }
            }
            return 'Does not exist';
        }
        else {
            return 'Does not exist';
        }
    }


}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const ht = new HashTable(8);
ht.set('Prerna', new Person('Prerna', 32));
ht.set('PrernaX', new Person('PrernaX', 34));
ht.set('PrernY', new Person('PrernY', 134));
console.log(JSON.stringify(ht.buckets));
console.log(ht.get('Prerna'));
console.log(ht.has('Prernaaa'));
ht.delete('PrernY');
console.log(JSON.stringify(ht.buckets));
console.log(ht.get('PrernY'));
