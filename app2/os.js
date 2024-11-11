const os = require('os') //os is a built-in module within nodeJS

//get user info
const currentOS= {
    user : os.userInfo().username,
    os: os.version(),
    release: os.release(),
    arch : os.arch(),
    mem: (os.totalmem()/1024/1024/1024).toFixed(1) + " GB",
    freemem: (os.freemem()/1024/1024/1024).toFixed(1) + " GB",
    uptime: (os.uptime()/60/60).toFixed() + " hours",
}

console.log(currentOS)