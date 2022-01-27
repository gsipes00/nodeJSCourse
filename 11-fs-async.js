const { readFile, writeFile } = require('fs');
console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return
    };
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err)
            return
        const second = result
        writeFile('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log(result)
        })
        console.log('done with this task')
        };
    });
});
console.log('starting next task')
//this didn't work for me. It never created the new text file 'result-sync.txt'. I didn't have enough desire and interest to spend too long debugging. Left off at 1:33:00