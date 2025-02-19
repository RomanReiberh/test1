function waitForTime(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Ожидание завершено");
        }, ms);
    });
}

waitForTime(1000).then(console.log); 
waitForTime(3000).then(console.log); 
waitForTime(5000).then(console.log);