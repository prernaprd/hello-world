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