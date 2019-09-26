const http = require('http');
const hostname = 'localhost';
const port = '3000';

// creating server
const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

// starting server
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});