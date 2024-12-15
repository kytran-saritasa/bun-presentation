// Install the `is-thirteen` package first by running: npm install is-thirteen
// Send GET request to the route /:number to check if the number is 13
// Run the server: 'node thirteen.js'
// The point -> Bun is compatible with NodeJS,
// so we can also run the command 'bun run thirteen.js' without modifying anything.

const http = require('http');
const url = require('url');
const is = require('is-thirteen');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const numberParam = parsedUrl.pathname.slice(1); // Extract number from URL

    // Validate if the input is a number
    const parsedNumber = parseInt(numberParam, 10);
    if (isNaN(parsedNumber)) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        return res.end('Invalid input. Please provide a valid number.');
    }

    // Check if the number is 13
    if (is(parsedNumber).thirteen()) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('The number is 13');
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('The number is not 13');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
