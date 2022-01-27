const path = require('path');

//prints "\" the seperator
console.log(path.sep)

//joins the strings to form a path and places the sperator between them
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath)

//to grab just the last piece of the file path, use basename
const base = path.basename(filePath)
console.log(base)

//creates an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)

