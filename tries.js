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
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
    }

    deleteTail() {
        if(this.tail != null) {
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
            return 'Not found';
        }
        else {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
    }

    delete(value) {
        if(this.head != null) {
            this.deleteHead(value);
        }
        else if(this.tail != null){
            this.deleteTail(value);
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
                    currentNode = currentNode
                }
            }
            
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

    has(key) {
        return Object.prototype.hasOwnProperty(this.keys, key);
    }

    set(key, value) {
        const hashKey = this.hash(key);
        const inputLinkedList = this.buckets[hashKey];
        if(inputLinkedList.size > 0) {
            let currentNode = inputLinkedList.head;
            while(currentNode) {
                if(currentNode.value.key === key) {
                    currentNode.value.value = value;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
            inputLinkedList.append({key: key, value: value});
        }
        else {
            inputLinkedList.append({key: key, value: value});
        }
    }

    get(key) {
        const hashKey = this.hash(key);
        const inputLinkedList = this.buckets[hashKey];
        if(inputLinkedList.size > 0) {
            let currentNode = inputLinkedList.head;
            while(currentNode) {
                if(currentNode.value.key === key){
                    return currentNode.value.value;
                }
                else {
                    currentNode = currentNode.next;
                }
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
                    return inputLinkedList.delete(currentNode.value.value);
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

    getKeys() {
        return Object.keys(this.keys);
    }
}

class Trie {
    constructor(character, isCompleteWord) {
        this.character = character;
        this.isCompleteWord = isCompleteWord;
        this.children = new HashTable();
    }

    getChild(character) {
        return this.children.get(character);
    }

    suggestChildren(){
        return [this.children.getKeys()];
    }

    toString() {
        let childrenAsString = this.suggestChildren().toString();
        childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
        const isCompleteString = this.isCompleteWord ? '*' : '';

        return `${this.character}${isCompleteString}${childrenAsString}`;
    }

    addChild(character, isCompleteWord) {
        if(!this.children.has(character)) {
            this.children.set(character, new Trie(character, isCompleteWord));
        }

        let childNode = this.children.get(character);
        childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;

        return this;
    }

    hasChild(character) {
        return this.children.has(character);
    }

    hasChildren(){
        return this.children.getKeys().length !== 0;
    }

    removeChild(character) {
        const childNode = this.getChild(character);

        if(childNode && !childNode.isCompleteWord && !childNode.hasChildren()) {
            this.children.delete(character);
        }

        return this;
    }
}

const trie = new Trie('c', false);
trie.addChild('a', false);
trie.addChild('xc', false);
console.log('2');
console.log(JSON.stringify(trie.children));
trie.removeChild('xc');
console.log('1');
console.log(JSON.stringify(trie.children));