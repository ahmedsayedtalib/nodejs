const {readFile,writeFile} = require('fs')

 const read= readFile('./content/read.txt','utf-8',(err,result) => {
    if (err) {
        console.log(err)
    }
    console.log(result);
 })


const read2 = readFile('./content/read2.txt','utf-8',(err,result) => {
    if (err) {
        console.log(err)
    }
    console.log(result)
})

const write = writeFile('./content/writeAsync.txt','Here is a Async write operation',{flag:"a"},(err,result) => {
    if (err) {
    console.log(err)
    return;
}
console.log(result)
})