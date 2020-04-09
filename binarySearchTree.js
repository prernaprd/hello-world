'use strict'

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if(this.data === value) {
            return this;
        }
        else if(value < this.data) {
            if(this.left === null) {
                this.left = new Node(value);
            }
            else {
                this.left.insert(value);
            }
        }
        else if(value > this.data) {
            if(this.right === null) {
                this.right = new Node(value);
            }
            else {
                this.right.insert(value);
            }
        }
        else {
            console.log('Should not come here');
        }
    } 

    contains(value) {
        if(this.data === value) {
            return true;
        }
        else if(value < this.data) {
            if(this.left != null) {
                return this.left.contains(value);
            }
            else {
                return false
            }
        }
        else {
            if(this.right != null) {
                return this.right.contains(value);
            }
            else {
                return false;
            }
        }
    }

    find(value) {
        if(value === this.data) {
            return this;
        }
        else if(value < this.data && this.left != null) {
            return this.left.find(value);
        }
        else if(value > this.data && this.right != null) {
            return this.right.find(value);
        }
        else {
            return null;
        }
    }

    removeChild(value) {
        if(this.left != null && this.left.data === value) {
            this.left = null;
            return true;
        }

        if(this.right != null && this.right.data === value) {
            this.right = null;
            return true;
        }

        return false;
    }

    setValue(value) {
        this.value = value;
    
        return this;
      }

    remove(value) {
        const nodeToRemove = this.find(value);

        if(!nodeToRemove) {
            return 'Item not found to be removed';
        }
      
        const parent = nodeToRemove;

        //Node is a leaf
        if(nodeToRemove.left === null && nodeToRemove.right === null) {

            if(parent) {
                parent.removeChild(value);
            }
            else {
                parent.setValue(undefined);
            }
        }
        //node has both children
        else if(nodeToRemove.left != null && nodeToRemove.right != null){
            const nextBiggerNode = nodeToRemove.right.findMin();
            nodeToRemove.setValue(nextBiggerNode.value);
        }

        
    }

    findMin() {
        if (!this.left) {
          return this;
        }
    
        return this.left.findMin();
      }

    inOrderTraverse() {
        let traverse = [];
        if(this.left != null) {
            traverse = traverse.concat(this.left.inOrderTraverse());
        }
        traverse.push(this.data);
        if(this.right != null) {
            traverse = traverse.concat(this.right.inOrderTraverse());
        }
        return traverse;
    }

    preOrderTraverse() {
        let traverse = [];
        traverse.push(this.data);
        if(this.left != null) {
            traverse = traverse.concat(this.left.preOrderTraverse());
        }
        
        if(this.right != null) {
            traverse = traverse.concat(this.right.preOrderTraverse());
        }
        return traverse;
    }

    postOrderTraverse() {
        let traverse = [];
        
        if(this.left != null) {
            traverse = traverse.concat(this.left.postOrderTraverse());
        }
        
        if(this.right != null) {
            traverse = traverse.concat(this.right.postOrderTraverse());
        }
        traverse.push(this.data);
        return traverse;
    }

    toString(){
        console.log('Data', this.data, 'Left', this.left,'Right', this.right);
    }
    

    height() {
        let leftHeight = 0;
        let rightHeight = 0;
        
        if(this.data === null || this.data === undefined) {
            return -1;
        }
        else{
            if (this.left != null) {
                leftHeight = 1 + this.left.height();
            }
        
            if (this.right != null) {
                rightHeight = 1 + this.right.height();
            }

            return leftHeight > rightHeight ? leftHeight : rightHeight;
        }

    }

    lca(a, b) {
        if(this.data != null) {
            return this;
        }
        
        if(this.data < a && this.data < b) {
            return this.lca(this.right, a, b);
        }

        if(this.data > a && this.data > b) {
            return this.lca(this.left, a, b);
        }

        return this.data;
    }
}

const tree = new Node(7);
tree.insert(4);
tree.insert(6);
tree.insert(10);
tree.insert(5);
tree.insert(20);

tree.insert(30);
tree.insert(26);
tree.insert(32);
tree.toString();
console.log(tree.inOrderTraverse());
console.log(tree.preOrderTraverse());
console.log(tree.postOrderTraverse());
console.log(tree.contains(4));
console.log(tree.find(6));
console.log(tree.height() === -1 ? 0 : tree.height()+1);
console.log(tree.lca(30,32));