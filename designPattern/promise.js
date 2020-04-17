const delay = (seconds) => new Promise((resolves, rejects) => {
    if(seconds > 5000) {
        rejects(new Error(`${seconds} too long`));
    }
    
    setTimeout(() => {
        resolves(`delay of ${seconds} ms`)
    }, seconds);
});

delay(6000)
    .then((msg) => {console.log(msg); return 'over';})
    .then((text) => console.log(`Waiting ${text}`))
    .catch((err) => console.log(`Error ${err.message}`));