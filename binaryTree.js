'use strict'
class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
       return this.items.shift();
    }

    peek(){
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }
}

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    setLeft(value) {
        if(this.left) {
            this.left.parent = null;
        }
        
        this.left = new BinaryTreeNode(value);
        this.left.parent = this;
        return this;
    }

    setRight(value) {
        if(this.right) {
            this.right.parent = null;
        }

        this.right = new BinaryTreeNode(value);
        this.right.parent = this;
        return this;
    }

    height(){
        let leftHeight = 0;
        let rightHeight = 0;

        if(this.left) {
            leftHeight = 1 + this.left.height();
        }

        if(this.right) {
            rightHeight = 1 + this.right.height();
        }

        return Math.max(leftHeight, rightHeight);
    }

    inOrderTraversal(){
        let traverse = [];
        if(this.left) {
            traverse = traverse.concat(this.left.inOrderTraversal());
        }

        traverse.push(this.value);

        if(this.right) {
            traverse = traverse.concat(this.right.inOrderTraversal());
        }

        return traverse;
    }

    levelOrder(root) {
        if (root === null) {
            return [];
        }
    
        // Perform BFS traversal
        const result = [];
        const queue = [];
        const levelQueue = [];
        queue.push(root);
        levelQueue.push(0);
    
        while (queue.length !== 0) {
            const n = queue.shift(); // dequeue
            const level = queue.shift(); // dequeue
    
            if (result[level] === undefined) {
                result[level] = [];
            }
            result[level].push(n.value);
    
            if (n.left !== null) {
                queue.push(n.left);
                levelQueue.push(level + 1);
            }
            if (n.right !== null) {
                queue.push(n.right);
                levelQueue.push(level + 1);
            }
        }
    
        return result;
    }

}

const bt = new BinaryTreeNode(8);
bt.setLeft(3);
bt.setRight(1);
bt.left.setLeft(13);
bt.left.setRight(23);
console.log(bt.inOrderTraversal().join(','));
console.log(bt.height());
console.log(JSON.stringify(bt.levelOrder(bt)));
