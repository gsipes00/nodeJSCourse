//you can install packages using npm either locally (as in only for a single project) or globally (as in making it available for all projects)

//to install locally use the following command: npm i <package name>
//to install a package globally use the following: npm install -g <packageName>

//package.json - manifest file (stores important information about the project/file)
// can create the .json file manually (creat a package.json in the root folder, and create properties)
//can create using npm init (step by step, can skip each step)
//can use npm init -y (uses defualt values in setup)

const _ = require('lodash');

const items = [1, [2, 4, 6], [3,4]]

const newItems = _.flattenDeep(items);
console.log(newItems);