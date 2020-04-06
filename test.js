'use strict'
class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(item) {
        this.stack1.push(item);
        let data = this.stack1[this.stack1.length-1];
        this.stack2.push(data); 
    }

    dequeue() {
        if(this.stack2.length === 0) {
            if(this.stack1.length !== 0) {
                for(let i = 0; i < this.stack1.length; i++) {
                    let data = this.stack1.pop();
                    this.stack2.push(data);
                }
            }
            else {
                return 'Empty';
            }
        }
        return this.stack2.pop();
    }

    peek() {
        return this.stack2.length > 0 ? this.stack2[0] : '';
    }

}

function processData(input) {
    //Enter your code here
    let inputList = input.split('\n');
    let n = inputList[0];
    let i = 1;
    let queue = new Queue();
    while(i <= n) {
        let option = inputList[i];
        switch(option[0]) {
            case '1':
                let value = parseInt(option.split(' ')[1]);
                queue.enqueue(value);
                break;
            case '2':
                queue.dequeue();
                break;
            case '3' :
                console.log(queue.peek());
                break;
        }
        i++;
    }
} 

let input = '10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2';
processData(input);

