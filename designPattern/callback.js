console.log(`Beginning...`);

const world = () => {
    console.log(`World`);
}

const hello = (next) => {
    console.log(`Hello`);
    next();
}
console.log(`In process...`);
const helloWorld = () => {
    hello(() => world());
}

helloWorld();

