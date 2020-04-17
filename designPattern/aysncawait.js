const delay = (seconds) => {
    setTimeout(() => {
        console.log(`Delay by ${seconds}`);
    }, seconds);
};

const time = async () => {
    await delay(1000);
    await delay(3000);
};

time();