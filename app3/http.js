const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/') {
    res.end('Welcome to my first nodeJS webserver')
}
else if (req.url === '/about') {
    res.end('/Ahmed Sayed.')
}
else {
    res.end('<h1 style:"font-color:red">Oops!</h1><p>Why are you even here?<p> \
        <a href = "/">Home page</a> \
        <input style="border-radius: 20px 20px 20px 20px; width: 100px; height: 50px; \
         color: aqua;" type="text" value="Enter" placeholder="Enter name Here">Add This</input>')
}
})

server.listen(5000)