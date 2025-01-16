const http = require('http');


const server = http.createServer((req, res) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello')
})

server.listen(3000, () => {
    console.log('Logging of the request! ' +
        'server on; port: 3000')
});