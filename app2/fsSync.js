const {readFileSync,writeFileSync} = require('fs')

const read = readFileSync('./content/read.txt','utf-8')
const read2 = readFileSync('./content/read2.txt','base64')

const write = writeFileSync('./content/write.txt','This is a write result from Ahmed')
const write2 = writeFileSync('./content/writeSync_result.txt',`This is ${read} + ${read2}`)


console.log(read,read2,write,write2)
