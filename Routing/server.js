const http = require('http');
const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, '..', 'index.html');


const server3 = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, {'content-type': 'text/html'});
                res.end('<h1>404 Page is not found, error read file</h1>');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<h1>About Page</h1>`);
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<h1>Contact</h1>`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(`<h1>404 Page is not found</h1>`);
    }


})

server3.listen(3000, () => {
    console.log('Server3 on! port: 3000')
})