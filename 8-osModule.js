const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//get system uptime in miliseconds
console.log(`The system uptime is: ${os.uptime() / 1000} seconds.`)


const currentOS = {
    name: os.type(),
    relese: os.release(),
    //totalMem: os.totalMem(),
    totalmem: os.totalmem(),
    freeMem: os.freemem()
};
console.log(currentOS)