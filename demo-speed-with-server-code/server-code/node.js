const { createServer } = require('node:http');

const HOST = '127.0.0.1';
const PORT = 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node - Hello World!');
});

server.listen(PORT, HOST, () => {
  console.log('Listening on 127.0.0.1:3000');
});
