const { readFileSync, writeFileSync } = require('fs');

//read in the txt files. 
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

//print them
console.log(first, second);

//write to a new file, and optional "append" flag
writeFileSync('./content/result.txt',  `Here is the result: ${first}, ${second}`, {flag : 'a'})

console.log('done with this task')
console.log('starting the next one')