const S = (() => {
    let instance;
    createObject = () => {
        let obj = new Object('New object');
        return obj;
    }

    return {
        getInstance: () => {
            if(!instance) {
                instance = createObject();
            }
            return instance;
        }
    };
})();

const ref1 = S.getInstance();
const ref2 = S.getInstance();

console.log(ref1 === ref2);

class S1 {
    constructor() {
        this.instance;
    }

    getInstance() {
        if (!this.instance) {
            this.createObject();
        }
        else {
            return this.instance;
        }
    }
    createObject() {
        let obj = new Object();
        return obj;
    }
}

const r1 = new S1();
const r2 = new S1();
console.log(r1.getInstance() === r2.getInstance());