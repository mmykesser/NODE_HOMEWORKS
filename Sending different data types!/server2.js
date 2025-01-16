const http = require('http');

const server2 = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-type': ' text/html'});
        res.end('<h1>Main</h1>');
    } else if (req.url === '/json') {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify({message: 'Hello, JSON!'}));
    } else {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('Page is not found');
    }
});

server2.listen(3000, () => {
    console.log('Sending different data types!' +
        'server2 on; port: 3000')
});