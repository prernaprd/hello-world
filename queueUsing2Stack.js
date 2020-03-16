'use strict'

class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(data) {
        this.stack1.push(data);
    }

    dequeue() {
        if(this.stack2.length === 0) {
            if(this.stack1.length !== 0) {
                while(this.stack1.length > 0) {
                    let p = this.stack1.pop();
                    this.stack2.push(p);
                }
            }
            else {
                return "Cannot dequeue from empty queue";
            }
        }
        return this.stack2.pop();
    }
    
    processData(input) {
        //Enter your code here
        let inputList = input.split(' ');
        switch(inputList[0]) {
            case '1':
                this.enqueue(inputList[1]);
                break;
            case '2':
                this.dequeue();
                break;
            case '3':
                if(this.stack2.length > 0) {
                    return (this.stack2[this.stack2.length - 1]);
                }
                else {
                    return 'Queue is empty';
                }
            break;
    
        }
    } 
}

const queue = new Queue();

queue.processData('1 1');
queue.processData('1 2');
queue.processData('1 3');
console.log(queue.stack1.join(','));
queue.processData('2');
console.log(queue.stack2.join(','));
console.log(queue.processData('3'));