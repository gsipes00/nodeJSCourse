const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/') {
        res.end('Welcome to our home page using 3500')
    }
    if(req.url === '/about') {
        res.end('This is my about page 2.')
    }
    res.end(`
        <h1>Oops!</h1>
    <p>We can't seem to find the page you ar looking for</p>
        <a href="/">Back Home</a>`);
})

server.listen(5000);

//1:45:18 for some reason my server keeps erring out. 

