'use strict'

class Heap {
    constructor(){
        this.heapContainer = [];
    }

    getRightChildIndex(parentIndex) {return (parentIndex * 2)+2 ;};
    getLeftChildIndex(parentIndex) {return (parentIndex * 2)+1 ;};
    getParentIndex(childIndex) {return Math.floor((childIndex - 1)/2);};

    hasLeftChild(index) {return this.getLeftChildIndex(index) < this.heapContainer.length;};
    hasRightChild(index) {return this.getRightChildIndex(index) < this.heapContainer.length;};
    hasParent(index) {return this.getParentIndex(index) >= 0;};

    leftChild(index) {return this.heapContainer[this.getLeftChildIndex(index)];};
    rightChild(index) {return this.heapContainer[this.getRightChildIndex(index)];};
    parent(index) {return this.heapContainer[this.getParentIndex(index)];};

    swap(firstIndex, secondIndex) {
        let temp = this.heapContainer[firstIndex];
        this.heapContainer[firstIndex] = this.heapContainer[secondIndex];
        this.heapContainer[secondIndex] = temp;
    }

    isEmpty(){ return !this.heapContainer.length;};

    peek() {
        if(this.heapContainer.length === 0) {
            return null;
        }
        else {
            return this.heapContainer[0];
        }
    }

    poll() {
        let size = this.heapContainer.length;
        if(size === 0) { 
            return null;
        }
        if(size === 1) { 
            return this.heapContainer.pop();
        }
        else {
            let item = this.heapContainer[0];
            this.heapContainer[0] = this.heapContainer.pop();
            this.heapifyDown();
            return item;
        }
    }

    add(item) {
        this.heapContainer.push(item);
        this.heapifyUp();
    }

    heapifyUp(customStartIndex) {
        let currentIndex = customStartIndex || this.heapContainer.length - 1;
        while(this.hasParent(currentIndex) && this.parent(currentIndex) > this.heapContainer[currentIndex]) {
            this.swap(this.getParentIndex(currentIndex), currentIndex);
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown(customStartIndex) {
        let currentIndex = customStartIndex || 0;
        let nextIndex = null;

        while(this.hasLeftChild(currentIndex)) {
            if(this.hasRightChild(currentIndex) && this.rightChild[currentIndex] < this.leftChild[currentIndex]) {
                nextIndex = this.getRightChildIndex(currentIndex);
            }
            else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }

            if(this.heapContainer[currentIndex] < this.heapContainer[nextIndex]) {
                break;
            }
            else {
                this.swap(currentIndex, nextIndex);
            }
            currentIndex = nextIndex;
        }
    }

    toString(){
        console.log(this.heapContainer.join(','));
    }

}

const heap = new Heap();
heap.add(3);
heap.add(4);
heap.add(8);
heap.add(5);
heap.add(7);
heap.add(10);
heap.toString();
console.log(heap.peek());
heap.poll();
heap.toString();
console.log(heap.peek()); 
heap.add(11);
heap.toString();
heap.add(3);
heap.toString();
