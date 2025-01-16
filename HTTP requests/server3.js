const http = require('http');
const url = require('url');

const server3 = http.createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    const requestData = urlParse.query;

    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(requestData));
    } else if (req.method === 'POST') {
        let testData = '';
        req.on('data', (chunk) => {
            testData += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`Data: ${testData}`)
        })
    }
})

server3.listen(3000, () => {
    console.log('Server3 on! port: 3000')
})