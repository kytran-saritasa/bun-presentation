// Install the `figlet` package first by running: npm install figlet
// Run the server: 'node node.js'

const { createServer } = require('node:http');
const figlet = require("figlet");

const HOST = '127.0.0.1';
const PORT = 3000;

const server = createServer((req, res) => {
  figlet('Node.js', (err, data) => {
    if (err) {
      console.error('Error creating ASCII art:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('Error generating ASCII art');
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
